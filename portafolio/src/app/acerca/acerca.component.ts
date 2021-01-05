import { Component, OnInit } from '@angular/core';
import { AnimacionesService } from '../services/animaciones.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.scss']
})
export class AcercaComponent implements OnInit {

  constructor(private animaciones: AnimacionesService) { }

  ngOnInit(): void {
    this.animaciones.animacionesToggle = false;
  }
}
