import { Component } from '@angular/core';

interface Componente{
  name:string;
  icon:string;
  redirecTo: string;

}


interface Componente{
  name:string;
  icon:string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  componentes : Componente[]=[
    {
      name:'Inicio',
      icon: 'cafe-outline',
      redirecTo:'/principal'
    },
    { 
      name:'Codigo',
      icon:'document-attach-outline',
      redirecTo:'/Card'

    },
    {
      name:'Formulario',
      icon: 'attach-outline',
      redirecTo:'/formulario'   
    },
    {
      name:'Informacion',
      icon: 'attach-outline',
      redirecTo:'/informacion'   
    },
     

  ]



  constructor() {}
}
