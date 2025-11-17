// este servicio es el que conecta la app ionic/angular con tu api de node/express

// indica que esta clase es un servicio y puede introducirse en otros componentes
import { Injectable } from '@angular/core';
// permite hacer peticiones http (get, post, put, delete)
import { HttpClient } from '@angular/common/http';
// tipo de datos que devuelve peticiones http en angular 
import { Observable } from 'rxjs';


// angular crea una sola instancia de este servicio para toda la aplicacion
// se puede usar en cualquier componente sin tener que declararlo en cada modulo
@Injectable({
  providedIn: 'root'
})

// clase principal del servicio
export class DiscosService {

  // punto de conexion de tu API Node
  // tu servidor backend y ruta de discos.routes.js
  private endpoint = 'http://localhost:8080/api/discos';

  constructor(private http: HttpClient) {}// en el constructor HttpClient permite hacer peticiones http

 
  // hace una peticion get y permite obtener todos los discos
  getDiscos(): Observable<any> {
    return this.http.get(this.endpoint);
  }

  // get tb pero en este caso me lo devuelve segun el campo estilo
  getDiscosByEstilo(estilo: string): Observable<any> {
    return this.http.get(`${this.endpoint}/estilo/${encodeURIComponent(estilo)}`);
  }

  // post que permite crear un nuevo disco en la bd
  postDisco(data: any): Observable<any> {
    return this.http.post(this.endpoint, data);
  }

// crea un put para actualizar la informacion de un disco de mi BD
  updateDisco(id: any, data: any): Observable<any> {
    // esto me permite buscar segun el id para poder modificar los datos
    // y hacer las modificaciones
    return this.http.put(`${this.endpoint}/${id}`, data);
  }

  // delete para borrar un disco creado en mi BD
  deleteDisco(id: any): Observable<any> {
    // permite buscar el disco por la id y borrarlo de la BD
    return this.http.delete(`${this.endpoint}/${id}`);
  }
}

