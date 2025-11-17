// importa el decorador @Component que angular usa para indicar que una clase es un componente
import { Component } from '@angular/core';

// define como funciona o como se construye
@Component({
  // nombre del componente
  selector: 'app-home',
  //indica el archivo HTML que contiene la vissta del componente
  // como por ejemplo el ion-contenedor o botones
  templateUrl: './home.page.html',
  //indica el archivo de estilos CSS
  styleUrls: ['./home.page.scss'],
  //significa que este componente no es independiente
  // es importante si no esta esta linea nos errores de codigo
  standalone: false
})

// esta vacia porque solo muestra un menu con botones sin logica
export class HomePage {

  constructor() {}

}
