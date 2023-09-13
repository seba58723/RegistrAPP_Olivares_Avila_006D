import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(
    private menuController: MenuController,
    private router: Router
  ) {}

  ngOnInit() {}

  mostrarMenu() {
    this.menuController.open('first');
  }

  iniciarSesion() {
    this.router.navigate(['/principal']);
  }

  restablecerContrasena() {
    this.router.navigate(['/restablecer']);
  }
}