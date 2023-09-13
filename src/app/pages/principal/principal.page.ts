import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  MostrarMenu(){
    this.menuController.open('first');
  }
}
