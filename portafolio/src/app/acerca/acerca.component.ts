import { Component, OnInit } from '@angular/core';
import { AnimacionesService } from '../services/animaciones.service';
import * as $ from 'jquery';
import SwiperCore, {Swiper} from 'swiper/core';
import * as firebase from 'firebase';

export interface Certificado{
  nombre: string;
  imgUrl: string;
}


@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.scss']
})
export class AcercaComponent implements OnInit {

  certificados: Array<any> = [];
  certificadoActivo: Certificado = {
    nombre: '',
    imgUrl: ''
  };
  
  mensajeLandscape = false;
  
  constructor(private animaciones: AnimacionesService) { 
    
  }

  ngOnInit(): void {

    this.obtenerCertificados();
    
    


    this.animaciones.animacionesToggle = false;

    const elementoSuperpuesto = document.getElementById('elemento-superpuesto');
    elementoSuperpuesto?.remove();


    /**Swiper */

    const menuButton:any = document.querySelector('.menu-button');
		const openMenu = function () {
			swiper.slidePrev();
		};
		const swiper = new Swiper('.swiper-container', {
			slidesPerView: 'auto',
			initialSlide: 1,
			resistanceRatio: 0,
			slideToClickedSlide: true,
			on: {
				slideChangeTransitionStart: function () {
					let slider:any = this;
					if (slider.activeIndex === 0) {
						menuButton.classList.add('cross');
						// required because of slideToClickedSlide
						menuButton.removeEventListener('click', openMenu, true);
					} else {
						menuButton.classList.remove('cross');
					}
				}
				, slideChangeTransitionEnd: function () {
					let slider:any = this;
					if (slider.activeIndex === 1) {
						menuButton.addEventListener('click', openMenu, true);
					}
				},
			}
		});

    const certificadosContainer = document.getElementById('certificados');

    if(certificadosContainer){
      if(window.innerWidth <= 500){
        certificadosContainer.style.transform = 'scale(0)';
        this.mensajeLandscape = true;
      } else {
        certificadosContainer.style.transform = 'scale(1)';
        this.mensajeLandscape = false;
      }

    }
    
    

    addEventListener('resize', e=> {

      if(certificadosContainer){
        if(window.innerWidth <= 500){
          certificadosContainer.style.transform = 'scale(0)';
          this.mensajeLandscape = true;
        } else {
          certificadosContainer.style.transform = 'scale(1)';
          this.mensajeLandscape = false;
        }
  
      }

    });

    

  }

  async obtenerCertificados(){
    this.certificados = [];
    firebase.default.firestore().collection('certificados').get().then(cer => {
      cer.forEach(certificado => {
        const nuevoCertificado: Certificado = {
          nombre: certificado.data().nombre,
          imgUrl: certificado.data().imgUrl
        }

        this.certificados.push(nuevoCertificado);
      });

      this.certificadoActivo = this.certificados[0];

      setTimeout(() => {
        $(`.certificado.certificado0`).addClass('seleccionado');
      }, 1000);
      
    }).catch(err => {
      alert('Hubo un error cargando los certificados' + err);
    });
    
    
  }

  
  onSwiper(swiper: any) {
   
  }
  onSlideChange() {
    
  }


  seleccionarCertificado(index: number){
    $('.certificado').removeClass('seleccionado');
    this.certificadoActivo = this.certificados[index];

    $(`.certificado.certificado${index}`).addClass('seleccionado');
  }

}
