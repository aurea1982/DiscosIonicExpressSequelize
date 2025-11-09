import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscosService {

  endpoint = 'http://localhost:8080/api/discos';

  constructor(private http: HttpClient) { }

  getDiscos(): Observable<any> {
    return this.http.get(this.endpoint);
  }

  postDisco(data: any) {
  return this.http.post(this.endpoint, data);
}

deleteDisco(id: any) {
  return this.http.delete(`${this.endpoint}/${id}`);
}

updateDisco(id: any, data: any) {
  return this.http.put(`${this.endpoint}/${id}`, data);
}

}

