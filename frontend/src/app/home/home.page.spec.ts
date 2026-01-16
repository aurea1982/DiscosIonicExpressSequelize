// TestBed importa herramientas que permite crear un entorno de pruebas para angular
// ComponentFixture contenedor que permite acceder al compomente
import { ComponentFixture, TestBed } from '@angular/core/testing';
// importa para que ionic cargue sus componentes durante el test
import { IonicModule } from '@ionic/angular';
// el componente a probar
import { HomePage } from './home.page';

// agrupa el conjunto de pruebass relacionadas con HomePage
describe('HomePage', () => {
  // declaracion de variables
  let component: HomePage;
  // representa el entorno donde se prueba
  let fixture: ComponentFixture<HomePage>;

  // configura el entorno
  beforeEach(async () => {
    await TestBed.configureTestingModule({ //crea un modulo de prueba que declara el componente HomePage y los modulos IonicModule
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents(); // compila la plantilla HTML del componente

    // crea una instancia como si angular la estuviera cargando
    fixture = TestBed.createComponent(HomePage);
    // obtiene el componente creado
    component = fixture.componentInstance;
    // simula el proceso HTML en angular y la actualiza
    fixture.detectChanges();
  });

  // me permite saber si el HomePage se ha creado correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // si es verdadero exisste correctamente
  });
});
