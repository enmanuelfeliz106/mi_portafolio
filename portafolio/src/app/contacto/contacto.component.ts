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

    
  }

  enviarMensaje(nombre:string, email:string, asunto:string, mensaje:string){

    let mensajeContacto = {
      nombre: nombre,
      email: email,
      asunto: asunto,
      mensaje: mensaje
    };


    firebase.default.firestore().collection('mensajes').add(mensajeContacto).then( sucess =>{
      firebase.default.functions().httpsCallable('sendMail');
      
    }).catch(error =>{
      
    });
  }

}
