import { Component, OnInit } from '@angular/core';
import { AnimacionesService } from '../services/animaciones.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor(private animaciones: AnimacionesService) { }

  ngOnInit(): void {
    this.animaciones.animacionesToggle = false;
  }

}
