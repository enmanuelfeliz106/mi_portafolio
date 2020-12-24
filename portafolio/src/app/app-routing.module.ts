import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercaComponent } from './acerca/acerca.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CvComponent } from './cv/cv.component';
import { TrabajosComponent } from './trabajos/trabajos.component';

const routes: Routes = [{ path: 'trabajos', component: TrabajosComponent,  pathMatch: 'full'},
                        { path: '', component: TrabajosComponent,  pathMatch: 'full'},
                        { path: 'acerca', component: AcercaComponent ,  pathMatch: 'full'},
                        { path: 'cv', component: CvComponent,  pathMatch: 'full'},
                        { path: 'contacto', component: ContactoComponent,  pathMatch: 'full'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
