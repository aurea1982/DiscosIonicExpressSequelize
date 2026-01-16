import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { DiscosService } from '../services/discos-service';
import { PhotoService } from '../services/photo.service';

// incica que es un componente standole, usa ionic, angular y reactive forms
// usa html y css
@Component({
  selector: 'app-add-disco',
  templateUrl: './add-disco.page.html',
  styleUrls: ['./add-disco.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AddDiscoPage implements OnInit {

  // aqui me indica el formulario de disco con brand, model y estilo
  // URL que previsualiza la imagen
  // el archivo que se envia a backend
  discoForm!: FormGroup;
  capturedPhoto: string = "";
  fileBlob: Blob | null = null;

  // cree un array con los estilos que utilizare en html para crar un desplegable con esta opciones
  estilos = [
    'Black Metal',
    'Death Metal',
    'Doom Metal',
    'Thrash Metal',
    'Heavy Clásico'
  ];

  constructor(
    // inceca lo que necesito, crear formulario, para navegar, envia datos al backend y para tomar la foto
    private fb: FormBuilder,
    private router: Router,
    private discosService: DiscosService,
    private photoService: PhotoService
  ) {}

  // crea el formulario tenidendo en cuenta los tres campos a cubrir
  ngOnInit() {
    this.discoForm = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      estilo: ['', Validators.required]
    });
  }


  // toma la foto de la camara llamando a la camara y guardando la foto en capturePhoto 
  async takePhoto() {
    const data = await this.photoService.takePhoto();
    this.capturedPhoto = data.webPath || "";

    if (this.capturedPhoto) {
      // convierte la foto en Blod que esto es necesario para enviarla a multer
      const response = await fetch(this.capturedPhoto);
      this.fileBlob = await response.blob();
    }
  }

 // elige una imagen de la galeria permitiendo examinar mi pc
  async pickImage() {
    const data = await this.photoService.pickImage();
    this.capturedPhoto = data.webPath || "";

    if (this.capturedPhoto) {
      const response = await fetch(this.capturedPhoto);
      this.fileBlob = await response.blob();
    }
  }

 // si no me gusta la imagen sacada me permite descartarla
  discardImage() {
    this.capturedPhoto = "";
    this.fileBlob = null;
  }

 // una vez que relleno y saco la foto me permite enviar la informacion al backend para agregarlo a la BD
  submitForm() {
    if (!this.discoForm.valid) {
      console.log("Rellena todos los campos");
      return;
    }

    if (!this.fileBlob) {
      console.log("Selecciona una imagen");
      return;
    }

    const disco = this.discoForm.value;

    this.discosService.createDisco(disco, this.fileBlob).subscribe(() => {
      console.log("Disco creado correctamente");
      this.router.navigateByUrl("/list-discos");
    });
  }

  // permite volver a la la vista list-discos
  volverLista() {
    this.router.navigateByUrl('/list-discos');
  }


  volver() {
    this.router.navigateByUrl('/list-discos');
  }

}

// app-disco es la vista que me permite sacar la foto, buscarla y borrarla
// meter los datos de dicha captura para crear un nuevo disco 
// ts permite programar en JS y es la que le da funcionalidad a app-discos