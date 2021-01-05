import { Component, OnInit } from '@angular/core';
import { AnimacionesService } from '../services/animaciones.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  constructor(private animaciones: AnimacionesService) { }

  ngOnInit(): void {
    this.animaciones.animacionesToggle = false;
  }

}
