import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  pages = [
    { title: 'Inicio', url: '/main/home', icon: 'home-outline'},
    { title: 'perfil', url: '/main/profile', icon: 'person-outline'},
    { title: 'Registro Constancia', url: '/main/registrconstancias', icon: 'person-outline'},
    { title: 'Detalle Constancia', url: '/main/detall-constancia', icon: 'person-outline'},
    { title: 'Grafico', url: '/main/grafico', icon: 'person-outline'},
    { title: 'Docente', url: '/main/docente', icon: 'person-outline'},
    { title: 'Notas', url: '/main/notas', icon: 'person-outline'}
  ]

  router = inject(Router);
  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);
  currentPath: string = '';

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if(event?.url) this.currentPath = event.url;

    })
  }

  user(): User {
    return this.utilsSvc.getFromLocalStorage('user'); //Nombre de usuario en menu desplegable
  }

    //===== Cerrar Sesion =======
    signOut(){
      this.firebaseSvc.signOut();
    }

}
