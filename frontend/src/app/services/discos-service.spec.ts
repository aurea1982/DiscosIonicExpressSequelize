// su objetivo es probar que el servicio DiscosService se crea correctamente
// importa la herramienta principal de angular para crear entornos de pruebas
import { TestBed } from '@angular/core/testing';
// servicio que estamos probando
import { DiscosService } from './discos-service';

// agrupa todass las pruebas relacionadas con este servicio
describe('DiscosService', () => {
  // declaro la variable donde vamos a guardar la instancia del servicio al crearla para el test
  let service: DiscosService;

  // se ejecuta antes de cada prueba
  beforeEach(() => {
    // crea un modulo de pruebas vacio
    TestBed.configureTestingModule({});
    // crea una instancia del servicio dentro del entorno de pruebas, no en la app real
    service = TestBed.inject(DiscosService);
  });

  // verifica que el servicio se crea correctamente, que no es null o que no fallo
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
