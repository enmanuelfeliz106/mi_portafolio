import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AnimacionesService } from '../services/animaciones.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.scss']
})
export class TrabajosComponent implements OnInit {

  constructor(private animaciones: AnimacionesService) { }

  ngOnInit(): void {

    /**La navegacion comienza aqui, por eso aqui se aplican los stilos y scripts para todos los componentes  */

    if (this.animaciones.animacionesToggle) {

      $('.contenedor, .contenedor-trabajos').hide()

      $('.bienvenida').hide().fadeIn(2000).fadeOut(2000, function() {
        $('.contenedor, .contenedor-trabajos').show();
        $(this).remove();

        
        
      });

      this.animaciones.animacionesToggle = false;

    } else {

      $('.bienvenida').remove();
      $('.contenedor header h1').css('animation', 'none')

    }


    

    


  }

}
