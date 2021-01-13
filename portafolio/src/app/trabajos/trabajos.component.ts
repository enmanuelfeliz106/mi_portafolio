import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AnimacionesService } from '../services/animaciones.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.scss']
})
export class TrabajosComponent implements OnInit {

  infoProyecto = '';
  nombreProyecto = '';

  constructor(private animaciones: AnimacionesService) { }

  ngOnInit(): void {

    $('.modal').hide();

    /**La navegacion comienza aqui, por eso aqui se aplican los stilos y scripts para todos los componentes  */

    if (this.animaciones.animacionesToggle) {

      $('.contenedor, .contenedor-trabajos, header').hide()

      $('.bienvenida').hide().fadeIn(200).fadeOut(200, function() {
        $('.contenedor, .contenedor-trabajos, header').show();
        $(this).remove();

        
        
      });

      this.animaciones.animacionesToggle = false;

    } else {

      $('.bienvenida').remove();
      $('.contenedor header h1').css('animation', 'none')

    }


  }


  cerrarMensaje(){
    $('header.mensaje').fadeOut(1000);
  }

  abrirModal(proyecto: string){
    switch (proyecto){
      case 'yamelitas':
        this.nombreProyecto = 'Yamelitas';
        this.infoProyecto = `Página web en proceso de desarrollo, comencé este proyecto web el 02/01/2021. Yamelitas es una tienda virtual de productos para el cuidado de la piel y el cabello. Orientado mayormente a un público femenino jóven y liderado por dos jovenes emprendedoras. `;
        $('.yamelitas .modal').fadeIn(500);
        $('.mealsplan .modal').fadeOut(500);
        break;

      case 'mealsplan':
        this.nombreProyecto = 'Meals Plan';
        this.infoProyecto = `Esta aplicación híbrida es uno de mis proyectos personales, el cual está disponible para android. Meals Plan es un calendarizador de comidas para amantes de la cocina y el fitness.`;
        $('.mealsplan .modal').fadeIn(500);
        $('.yamelitas .modal').fadeOut(500);
        break;

      default:
        this.infoProyecto = '';

    }

    
    
    
  }


  cerrarModal(){
    $('.modal').fadeOut(500);

  }



}
