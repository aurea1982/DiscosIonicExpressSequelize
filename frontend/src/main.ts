import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
// importa PWA Elements que es necesario para camara
import { defineCustomElements } from '@ionic/pwa-elements/loader';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));


defineCustomElements(window);

// controla como arranca la aplicacion en el navegador
// inica angular, arranca el AppModule
// carga los componentes ionic y maneja los errores de arranque
// 