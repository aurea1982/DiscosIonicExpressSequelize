import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiscosService } from '../services/discos-service';

@Component({
  selector: 'app-my-discos',
  templateUrl: './my-discos.page.html',
  styleUrls: ['./my-discos.page.scss'],
  standalone: false
})
export class MyDiscosPage implements OnInit {

  discos: any = [];
  discoForm!: FormGroup;
  idEditando: any = null;  // <--- NECESARIO PARA UPDATE

  constructor(
    private discosService: DiscosService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.discoForm = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required]
    });

    this.getAllDiscos();
  }

  getAllDiscos() {
    this.discosService.getDiscos().subscribe((response: any) => {
      this.discos = response;
    });
  }

  editarDisco(d: any) {
    this.idEditando = d.id;
    this.discoForm.patchValue({
      brand: d.brand,
      model: d.model
    });
  }

  guardar() {
    if (this.idEditando == null) {
      // INSERTAR
      this.discosService.postDisco(this.discoForm.value).subscribe(() => {
        this.getAllDiscos();
        this.discoForm.reset();
      });
    } else {
      // ACTUALIZAR
      this.discosService.updateDisco(this.idEditando, this.discoForm.value).subscribe(() => {
        this.getAllDiscos();
        this.discoForm.reset();
        this.idEditando = null;
      });
    }
  }

  deleteDisco(id: any) {
    this.discosService.deleteDisco(id).subscribe(() => {
      this.getAllDiscos();
    });
  }

}


