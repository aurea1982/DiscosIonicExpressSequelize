import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  brand:string= "Master of Puppets";
  model:string= "Metallica";

  constructor(private router:Router) {}

  gotoMyDiscos(){

    this.router.navigateByUrl("/my-discos");
  }

}
