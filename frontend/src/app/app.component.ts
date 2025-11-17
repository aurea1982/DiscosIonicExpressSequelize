// importa un decorador que le dice a angular que le dice que esta clase sera un componente
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // etiqueta html que representa el componente, en index.js
  templateUrl: 'app.component.html', //indica el archivo html donde arranca la app
  styleUrls: ['app.component.scss'], // indica que estilos css se cargarn en el principal
  standalone: false, // indica que este componente pertenece al modulo AppModule
})
export class AppComponent { // esta vacia porque solo sirve como contenedor , no maneja logica
  // ya que la funcion principal se carga en el router
  constructor() {}
}
