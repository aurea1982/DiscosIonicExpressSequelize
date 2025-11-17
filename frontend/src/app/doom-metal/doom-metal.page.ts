import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiscosService } from '../services/discos-service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-doom-metal',
  templateUrl: './doom-metal.page.html',
  styleUrls: ['./doom-metal.page.scss'],
  standalone: false
})
export class DoomMetalPage implements OnInit {

  discos: any = [];
  discoForm!: FormGroup;
  idEditando: any = null;

  constructor(
    private discosService: DiscosService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
   
    this.discoForm = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      portada: [''],
      estilo: ['Doom Metal'] 
    });

    this.getAllDiscos();
  }

  
  getAllDiscos() {
    this.discosService.getDiscosByEstilo('Doom Metal').subscribe((r: any) => {
      this.discos = r;
      console.log('Discos Doom Metal cargados:', this.discos);
    });
  }

 
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) this.discoForm.patchValue({ portada: file.name });
  }

  guardar() {
    const discoData = {
      ...this.discoForm.value,
      estilo: 'Doom Metal'
    };

    if (this.idEditando == null) {
     
      this.discosService.postDisco(discoData).subscribe(() => {
        this.getAllDiscos();
        this.discoForm.reset({ estilo: 'Doom Metal' });
      
        const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      });
    } else {
      
      this.discosService.updateDisco(this.idEditando, discoData).subscribe(() => {
        this.getAllDiscos();
        this.idEditando = null;
        this.discoForm.reset({ estilo: 'Doom Metal' });
        
        const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      });
    }
  }

  
  editarDisco(d: any) {
    this.idEditando = d.id;
    this.discoForm.patchValue(d);

    
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) {
      const dataTransfer = new DataTransfer();
      const fakeFile = new File([], d.portada);
      dataTransfer.items.add(fakeFile);
      fileInput.files = dataTransfer.files;
    }
  }

  
  deleteDisco(id: any) {
    this.discosService.deleteDisco(id).subscribe(() => this.getAllDiscos());
  }

  volverInicio() {
    this.router.navigate(['/home']);
  }
}
