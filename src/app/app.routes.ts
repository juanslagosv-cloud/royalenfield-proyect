import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio';
import { MotocicletasComponent } from './pages/motocicletas/motocicletas';
import { NosotrosComponent } from './pages/nosotros/nosotros';
import { ContactoComponent } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'motocicletas', component: MotocicletasComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent }
];
