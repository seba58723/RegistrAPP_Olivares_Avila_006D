import { Component, ViewChild, ElementRef } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage {
  @ViewChild('qrCodeCanvas', { static: false }) qrCodeCanvas: ElementRef | undefined;
  qrCodeImage: string = '';
  qrData: string = 'https://www.duoc.cl';

  // Variables para el formulario de inicio de sesión
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor() {}

  generarCodigoQR() {
    console.log('Generando código QR...');

    if (this.qrCodeCanvas) {
      const canvas = this.qrCodeCanvas.nativeElement;
      
      // Limpiar el código QR anterior
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
      
      QRCode.toCanvas(canvas, this.qrData, (error) => {
        if (error) {
          console.error('Error al generar el código QR:', error);
        } else {
          console.log('Código QR generado correctamente.');
          this.qrCodeImage = canvas.toDataURL();
        }
      });
    } else {
      console.error('Elemento qrCodeCanvas no definido.');
    }
  }
}
