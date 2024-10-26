import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  variableUsuarios: any[] = []

  
  constructor( private apiService: ApiService) {}
  ngOnInit(): void {

    const usuarios = localStorage.getItem("usuarios")
    if(usuarios){
      this.variableUsuarios = JSON.parse(usuarios)
      console.log('Informacion de la LocalStorage ',this.variableUsuarios)
    }
    // En caso de que exista 'usuarios' dentro de la LocalStorage, se procede a buscar a la API
    else{
      this.llamarFuncionService()
      console.log('Informacion de el servicio ',this.variableUsuarios)
      localStorage.setItem("usuarios",JSON.stringify(this.variableUsuarios))
    }
  }

  // Se llama la funcion de Service que se contacta con la API y asignamos la informacion a una variable local
  llamarFuncionService(){
    this.apiService.obtenerData().subscribe( data =>{
      this.variableUsuarios = data
      localStorage.setItem("usuarios",JSON.stringify(data))

      return this.variableUsuarios
    })


  }
}
