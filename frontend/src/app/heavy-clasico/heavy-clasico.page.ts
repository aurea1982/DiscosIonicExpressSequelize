import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiscosService } from '../services/discos-service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-heavy-clasico',
  templateUrl: './heavy-clasico.page.html',
  styleUrls: ['./heavy-clasico.page.scss'],
  standalone: false
})
export class HeavyClasicoPage implements OnInit {

  discos: any = [];
  discoForm!: FormGroup;
  idEditando: number | null = null;

  fileBlob: File | null = null;
  filenameOriginal: string = "";

  constructor(
    private discosService: DiscosService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.discoForm = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      estilo: ['Heavy Clásico'],
      filenameOriginal: ['']   
    });

    this.getAllDiscos();
  }

  getAllDiscos() {
    this.discosService.getDiscosByEstilo('Heavy Clásico')
      .subscribe((r: any) => {
        this.discos = r;
      });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;
    this.fileBlob = file;
  }

  guardar() {

    const discoData = {
      brand: this.discoForm.value.brand,
      model: this.discoForm.value.model,
      estilo: "Heavy Clásico",
      filenameOriginal: this.discoForm.value.filenameOriginal
    };

   
    if (this.idEditando == null) {

      const blobToSend = this.fileBlob ? this.fileBlob : new Blob();

      this.discosService.createDisco(discoData, blobToSend)
        .subscribe(() => {
          this.getAllDiscos();
          this.resetForm();
        });

    }

  
    else {

      this.discosService.updateDisco(
        this.idEditando,
        discoData,
        this.fileBlob,
        this.discoForm.value.filenameOriginal
      ).subscribe(() => {
        this.getAllDiscos();
        this.resetForm();
      });
    }
  }

  editarDisco(d: any) {
    this.idEditando = d.id;
    this.filenameOriginal = d.filename;

    this.discoForm.patchValue({
      brand: d.brand,
      model: d.model,
      estilo: d.estilo,
      filenameOriginal: d.filename
    });
  }

  resetForm() {
    this.idEditando = null;
    this.fileBlob = null;

    this.discoForm.reset({ estilo: "Heavy Clásico" });

    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  }

  deleteDisco(id: any) {
    this.discosService.deleteDisco(id)
      .subscribe(() => this.getAllDiscos());
  }

  volverInicio() {
    this.router.navigate(['/home']);
  }
}
