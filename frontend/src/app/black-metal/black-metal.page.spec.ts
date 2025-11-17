// permite probar que la pagina BlackMetalPage se crea de forma correcta
// TestBed entorno de pruebas de angular, pra testear sin la ejecucion de la app real
// ComponentFixture contiene el TS y HTML
import { ComponentFixture, TestBed } from '@angular/core/testing';
// importa el componente que se va a probar
import { BlackMetalPage } from './black-metal.page';

// define un conjunto de pruebas
// testea la pagina indicada
describe('BlackMetalPage', () => {
  // declaro por un lado component que sera la instancia del componente
  // y por otro en entorno de pruebas de HTML con fixture
  let component: BlackMetalPage;
  let fixture: ComponentFixture<BlackMetalPage>;

  // se ejecuta antess de cada test
  // prepara el compoente para las pruebas
  beforeEach(() => {
    // copia el componente para testear
    fixture = TestBed.createComponent(BlackMetalPage);
    // guarda la instancia de la variable
    component = fixture.componentInstance;
    // simula el ciclo de vida del componente
    fixture.detectChanges();
  });

  // verifica si el compoente esta creado, si no tiene errores y si existe en memoria
  it('should create', () => {
    expect(component).toBeTruthy();// el componente ha de existir no puede ser null
  });
});
