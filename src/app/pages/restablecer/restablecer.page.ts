import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async Enviar() {
    const alert = await this.alertController.create({
    header: 'Gracias!',
    message: 'Se ha enviado un correo !',
    buttons: ['OK'],
    });

    await alert.present();

  }
}