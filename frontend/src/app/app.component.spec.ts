// permite que angular acepte modelos personalizados como botones
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// permite crear entornos de prueba en angular 
import { TestBed } from '@angular/core/testing';
// compone raiz de mi aplicacion, el que se carga primero
import { AppComponent } from './app.component';

// este bloque define un conjunto de pruebas relacionadas con AppComponent
describe('AppComponent', () => {

  // se ejecuta este bloque antes de cada prueba
  beforeEach(async () => {
    await TestBed.configureTestingModule({ // crea el modulo de pruebas
      declarations: [AppComponent], // declara el componente a testear 
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // evita errores
    }).compileComponents();// compila el componente y su template html
  });

  // permite verificar que el compoente se crea correctamente 
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // crea copia temporal de AppComponent para el testeo
    const app = fixture.componentInstance; // obtiene la istancia real para testear
    // permite acceder a propiedades como app.ngOnInit
    expect(app).toBeTruthy();// comprueba si el componente existe 
  });

});
