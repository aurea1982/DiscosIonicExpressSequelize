// Componet => crea componentes
// OnInit => interface para ejecutar ngOnInit
import { Component, OnInit } from '@angular/core';
// FormBuilder, FormGroup, Validators => permite crear y manejar formularios  
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// se comunica con la Api Expres para CRUD de discos 
import { DiscosService } from '../services/discos-service';
// permite navegar a otra pagina
import { Router } from '@angular/router';

// decorador del componente
@Component({
  selector: 'app-black-metal', // nombre interno del componente
  templateUrl: './black-metal.page.html', // archivo HTML
  styleUrls: ['./black-metal.page.scss'], // archivo CSS
  standalone: false // que el componente pertenece a un modulo, si no lo pongo me da errores
})
export class BlackMetalPage implements OnInit {

  // creo la lista de discos obtenidos del servidor
  discos: any = [];
  // crea el ngOnInit
  discoForm!: FormGroup;
  // indica con el id esta creando un disco o editandolo
  idEditando: any = null;
  
  constructor(
    private discosService: DiscosService, // CRUD de discos
    private fb: FormBuilder, // crea el formulario
    private router: Router // navega en entre pagina
  ) {}

  // formulario que se ejecuta prara crear la pagina
  ngOnInit(): void {
    
    this.discoForm = this.fb.group({
      brand: ['', Validators.required],// especifica que es obligatorio
      model: ['', Validators.required], // tb obligatorio
      portada: [''],
      estilo: ['Black Metal'] // el estilo ha de ser Black Metal para que aparezca en este formulario
    });

    // y llama a cargar los discos al entrar
    this.getAllDiscos();
  }


  // permite cargar todos los disgos segun el estilo
  // si es estilo black metal entonces se enseña 
 
  getAllDiscos() {
    this.discosService.getDiscosByEstilo('Black Metal').subscribe((r: any) => {
      this.discos = r;
      console.log('Discos Black Metal cargados:', this.discos);
    });
  }

  // permite elegir la portada de ese disco que cargado si su estilo es black metal
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) this.discoForm.patchValue({ portada: file.name });
  }

  
  guardar() {
    const discoData = {
      // al estar en la pagina de black metal por defecto en estilo se guarda este
      ...this.discoForm.value,
      estilo: 'Black Metal'
    };

   
    if (this.idEditando == null) {
      this.discosService.postDisco(discoData).subscribe(() => {
        this.getAllDiscos();
        this.discoForm.reset({ estilo: 'Black Metal' });
        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      });
       // pero puedo leer en nombre y autor del disco 
    // coge el formulario de leer todos los discoss
    // y lo crea con un id que le corresponda
    } else {
      this.discosService.updateDisco(this.idEditando, discoData).subscribe(() => {
        this.getAllDiscos();
        this.idEditando = null;
        this.discoForm.reset({ estilo: 'Black Metal' });
        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      });
    }
  }

  editarDisco(d: any) {
    // lama al disco segun su id

    this.idEditando = d.id;
    this.discoForm.patchValue(d);

    // permite visualizar ese disco segun el id
    // y volver a guardarlo con los datos modificados
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      const dataTransfer = new DataTransfer();
      const fakeFile = new File([], d.portada);
      dataTransfer.items.add(fakeFile);
      fileInput.files = dataTransfer.files;
    }
  }

  // llama al disco por id
  // lu lo borra y recarga la lista de discos
  deleteDisco(id: any) {
    this.discosService.deleteDisco(id).subscribe(() => this.getAllDiscos());
  }

  // creo un formulario que me permite volver al pulsar el boton de volver a la pagina home
  volverInicio() {
    this.router.navigate(['/home']);
  }
}
