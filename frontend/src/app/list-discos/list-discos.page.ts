import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DiscosService } from '../services/discos-service';

@Component({
  // define el nombre , que es standalone,que emplea html y css y los modulos que usa
  selector: 'app-list-discos',
  standalone: true,
  templateUrl: './list-discos.page.html',
  styleUrls: ['./list-discos.page.scss'],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class ListDiscosPage implements OnInit {

  // este arry guarda los discos que vienen del backend
  discos: any[] = [];

  constructor(
    private discosService: DiscosService,
    private router: Router
  ) {}

  // obtiene los discos
  ngOnInit() {
    this.getAllDiscos();
  }

  // recarga la lista cuando en add-list le doy a volver y he introducido informacion nueva
  ionViewDidEnter() {
    this.getAllDiscos();
  }

  // llama al metodo get por lo que me dara la visualizacion de todos los discos
  getAllDiscos() {
    this.discosService.getDiscos().subscribe((data: any) => {
      this.discos = data;
    });
  }

  // va a la vista add-discos
  addDisco() {
    this.router.navigateByUrl('/add-disco');
  }

  // boton que me permite ir  a la vista home
  volverInicio() {
    this.router.navigate(['/home']);
  }
}

// desde ts puedo controlar la vista list-dicos y programar lo que quiero que haga
// para ello conecta con HTML y con el backend usando Angular+Ionic