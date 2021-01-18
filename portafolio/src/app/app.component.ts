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

    
    
  }

}


