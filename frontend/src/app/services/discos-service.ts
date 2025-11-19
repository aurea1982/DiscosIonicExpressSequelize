// me va a pemitir comunicar la app con el backend

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscosService {

  // es la direccion de entrada para la API EXPRESS
  private endpoint = "http://localhost:8080/api/discos";

  constructor(private http: HttpClient) {}

 
  // permite hacer un GET en la direccion de mi API y obtener todos los discos
  getDiscos(): Observable<any> {
    return this.http.get(this.endpoint);
  }

  // hace lo mismo que lo anterior pero lo hace con el filtro de estilo
  getDiscosByEstilo(estilo: string): Observable<any> {
    return this.http.get(`${this.endpoint}/estilo/${encodeURIComponent(estilo)}`);
  }

 // permite crear un POST es decir crear un disco nuevo en la direccion
  createDisco(disco: any, fileBlob: Blob): Observable<any> {
    let formData = new FormData();

    formData.append("brand", disco.brand);
    formData.append("model", disco.model);
    formData.append("estilo", disco.estilo);
    formData.append("file", fileBlob); // esto es importante ya que asi puedo usar el mullter

    return this.http.post(this.endpoint, formData);
  }


  // permite generar un PUT
  updateDisco(id: any, disco: any, fileBlob: File | null, filenameOriginal: string): Observable<any> {

    let formData = new FormData();

 
    formData.append("brand", disco.brand);
    formData.append("model", disco.model);
    formData.append("estilo", disco.estilo);

    formData.append("filenameOriginal", filenameOriginal);// aqui guarda en principio la imagen en multer que ya tengo


    // si no modifico la imagen me deja la que ya esta 
    // si no pues guarda la nueva en el mismo formato
    if (fileBlob) {
      formData.append("file", fileBlob);
    }

    return this.http.put(`${this.endpoint}/${id}`, formData);
  }

 // borra el disco DELETE por el id
  deleteDisco(id: any): Observable<any> {
    return this.http.delete(`${this.endpoint}/${id}`);
  }
}
