import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portafolio';
  cv: any = {
    url: ''
  };
  


  ngOnInit(){
    firebase.default.initializeApp(environment.firebaseConfig);

    firebase.default.firestore().collection('mi-cv').doc('cv-actual').get().then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
        this.cv = doc.data();
        
      }
    })
    .catch(err => {
      alert('Hubo problemas buscando el CV. Revisa tu conexión a internet y vuelve a intentarlo.')
      console.log('Error getting document', err);
    });


    const miDescripcion = document.getElementById('mi-descripcion')

    setTimeout(() => {
      if(miDescripcion){
        let texto = 'Soy Enmanuel, desarrollador web y mobile'.split('');
        let contador = 0;
        let color = 0;
  
        if(texto){
          
          let largo = texto.length;
          let letras = '';
          setInterval( () => {
           if(texto && contador < largo){
             letras += texto[contador];
             miDescripcion.textContent = letras;
           } else {
             clearInterval();
           }
           contador += 1;
          }, 150);
  
        }
  
        
      }
      
    }, 1000);

    const elementoSuperpuesto = document.getElementById('elemento-superpuesto');
    
    setTimeout(() => {
      elementoSuperpuesto?.remove();
    }, 8000);
    

    
  }

}


