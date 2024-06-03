import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-num-capicua',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './num-capicua.component.html',
  styleUrl: './num-capicua.component.css'
})
export class NumCapicuaComponent {
  numero: string = '';
  num_inv: string = '';
 
  /*Funcion que se encarga de la invertir y comparar el numero, devuelve un booleano*/
  conversion():boolean{
    /*Se separa los numeros, se invierten y luego los junta */
    const invertido = this.numero.split('').reverse().join('');
    return this.numero === invertido;
    }
    
    /*Funcion que imprime si es capicua o no*/
    verificar(){
    if(this.conversion()){
      this.num_inv = "El número es capicúa"  
    }else{
      this.num_inv = "El número no es capicúa";
    }
  }
  /*Funcion que borra input y mensaje*/
  limpiar(){
    this.numero = '';
    this.num_inv = '';
  }
}

