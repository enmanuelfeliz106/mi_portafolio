import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { AcercaComponent } from './acerca/acerca.component';
import { CvComponent } from './cv/cv.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import {SwiperModule} from 'swiper/angular';





@NgModule({
  declarations: [
    AppComponent,
    TrabajosComponent,
    AcercaComponent,
    CvComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SwiperModule

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
