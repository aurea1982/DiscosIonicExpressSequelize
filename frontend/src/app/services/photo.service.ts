// tuve que crearla para poder manejar la camara y las imagenes usando Capacitor
// permite tomar la foto, elegir una de la galeria y devolverla con formato URI

import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() {}

 // toma la foto para ello abre la camara se toma la foto y devuelve un objeto Photo
 // luego da un URL para que se pueda usar en Ionic
 // lo envia al backen para que pueda ser tratada en el multer
  async takePhoto() {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 90
    });

    return photo; 
  }


  // selecciona la imagen de la galeria 
  // me permite abrir donde tengo guardadas las fotos y ademas solo permite elegir un limite de 1
  // ademas de devolver la foto con la estructura correcta 
  async pickImage() {
    const photos = await Camera.pickImages({
      limit: 1,
      quality: 90
    });

    return photos.photos[0]; 
  }

}


