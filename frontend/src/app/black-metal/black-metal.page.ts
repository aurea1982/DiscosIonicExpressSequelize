import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiscosService } from '../services/discos-service';
import { Router } from '@angular/router';

@Component({
  // selecciona el componente, html y css, no es standalone (modulo clasico Angular)
  selector: 'app-black-metal',
  templateUrl: './black-metal.page.html',
  styleUrls: ['./black-metal.page.scss'],
  standalone: false
})
export class BlackMetalPage implements OnInit {

  discos: any = []; //array de le este estilo
  discoForm!: FormGroup; // formulario
  idEditando: number | null = null;

  fileBlob: File | null = null; // para la imagen de multer
  filenameOriginal: string = "";

  constructor(
    private discosService: DiscosService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  // inicializa el formulario y carga los discos de black metal
  ngOnInit(): void {

    this.discoForm = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      estilo: ['Black Metal'], // se requiere este requisito
      filenameOriginal: [''] // he de ponerlo asi para que la portada use la imagen tratada con multer
    });

    this.getAllDiscos();
  }

  // obtiene los discos del estilo black metal
  // llama con un get al backend con el estilo black metal
  getAllDiscos() {
    this.discosService.getDiscosByEstilo('Black Metal')
      .subscribe((r: any) => {
        this.discos = r;
      });
  }

  //seleciona la imagen como ahora estoy usando el multer tengo que guardar el archivo que me envia el backend
  // ya que ahora no estan las imagenes en el fontend
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;
    this.fileBlob = file;
  }

  // guarda los datos y tiene en cuenta la foto que sea Blod para ser usada por multer
  guardar() {

    const discoData = {
      brand: this.discoForm.value.brand,
      model: this.discoForm.value.model,
      estilo: "Black Metal",
    };

 
    if (this.idEditando == null) {

      const blobToSend = this.fileBlob ? this.fileBlob : new Blob();

      this.discosService.createDisco(discoData, blobToSend).subscribe(() => {
        this.getAllDiscos();
        this.resetForm();
        // crea un nuevo disco cuando guarda la informacion, con un estilo por defecto
      });

    } 
 
    else {

      this.discosService.updateDisco(// o lo modifica si ya existe con la informacion nueva
        this.idEditando,
        discoData,
        this.fileBlob,  
        this.discoForm.value.filenameOriginal
      ).subscribe(() => {
        this.getAllDiscos();
        this.resetForm();
      });
    }
  }

  // permite el editar el disco con la informacion nueva
  // en caso de que sea todo igual no hace nada
  editarDisco(d: any) {
    this.idEditando = d.id;
    this.filenameOriginal = d.filename;

    this.discoForm.patchValue({
      brand: d.brand,
      model: d.model,
      estilo: d.estilo,
      filenameOriginal: d.filename
    });

    this.fileBlob = null;
  }

  // permite limpiar el formulario una vez que se guarda o edita la informacion
  resetForm() {
    this.idEditando = null;
    this.fileBlob = null;

    this.discoForm.reset({
      brand: "",
      model: "",
      estilo: "Black Metal",
      filenameOriginal: ""
    });

    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  }

  // al pulsar el boton de borrar lo que hace es eliminar el disco selecionado de la BD
  deleteDisco(id: any) {
    this.discosService.deleteDisco(id)
      .subscribe(() => this.getAllDiscos());
  }

  // al pulsar el boton de volver vuelve a la vista home
  volverInicio() {
    this.router.navigate(['/home']);
  }
}
