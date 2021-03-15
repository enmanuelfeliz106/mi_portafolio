import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AnimacionesService } from '../services/animaciones.service';
import * as firebase from 'firebase';
import SwiperCore, {Navigation, Pagination, Keyboard, Controller, Swiper, EffectCube, A11y} from 'swiper/core';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Navigation, Pagination, Keyboard, Controller, A11y, EffectCube]);



export interface Proyecto{
  nombre: string;
  descripcion: string;
  fechaInicio: string;
  fechaFinal: string;
  imagenes: Array<string>;
  tecnologias: Array<string>;
  url?: string;
}

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.scss']
})
export class TrabajosComponent implements OnInit {

  infoProyecto = '';
  nombreProyecto = '';
  proyectos: Array<Proyecto> = [];

  swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  constructor(private animaciones: AnimacionesService) {

    
  }

  ngOnInit(): void {

    this.obtenerProyectos();


  }


  obtenerProyectos(){
    firebase.default.firestore().collection('proyectos').get().then(proyectos => {
      proyectos.forEach(proyecto => {

        const nuevoProyecto: Proyecto = {
          nombre: proyecto.data().nombre,
          descripcion: proyecto.data().descripcion,
          fechaInicio: proyecto.data().fechaInicio,
          fechaFinal: proyecto.data().fechaFinal,
          imagenes: proyecto.data().imagenes,
          tecnologias: proyecto.data().tecnologias,
          url: proyecto.data().url
          
        }


        this.proyectos.push(nuevoProyecto);
      });

      
    })
  }


  cerrarMensaje(){
    $('#mensaje').fadeOut(1000);
  }

  onSwiper(swiper: any) {
   
  }
  onSlideChange() {
    
  }



}
