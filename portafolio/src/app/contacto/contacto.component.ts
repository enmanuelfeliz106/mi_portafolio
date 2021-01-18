import { Component, OnInit } from '@angular/core';
import { AnimacionesService } from '../services/animaciones.service';
import * as $ from 'jquery';
import * as firebase from 'firebase';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})

export class ContactoComponent implements OnInit {

  nombre = '';
  email = '';
  asunto = '';
  mensaje = '';

  

  constructor(private animaciones: AnimacionesService) { }

  ngOnInit(): void {
    this.animaciones.animacionesToggle = false;
    $('.mensaje-enviado').hide();

    
  }

  enviarMensaje(nombre:string, email:string, asunto:string, mensaje:string){

    if(nombre ==='' || email ==='' || asunto ==='' || mensaje ===''){
      alert('Por favor llene todos los campos del formulario.');
    } else if (!email.includes('@')){
      alert('Por favor proporcione un email válido.');
    } else {

      let mensajeContacto = {
        nombre: nombre,
        email: email,
        asunto: asunto,
        mensaje: mensaje
      };
  
  
      firebase.default.firestore().collection('mensajes').add(mensajeContacto).then( sucess =>{
        
        $('form').hide();
        $('.mensaje-enviado').fadeIn(2000);

      }).catch(error =>{
        alert('No se ha podido enviar, parece que tienes problemas de conexión.')
      });

    }

    
  }

}
