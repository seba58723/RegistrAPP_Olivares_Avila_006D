import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardPage } from './card.page';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: CardPage,
  }
];

@NgModule({
  declarations: [CardPage], // Asegúrate de que el componente CardPage esté declarado aquí
  imports: [
    CommonModule,
    FormsModule, // Agrega FormsModule aquí
    IonicModule,
    RouterModule.forChild(routes),
  ],
})
export class CardPageModule {}