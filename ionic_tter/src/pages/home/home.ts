import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { twitt } from '../../commons/twitt';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   listado:Array<twitt> = [
      {img:'https://images.pexels.com/photos/27411/pexels-photo-27411.jpg?w=940&h=650&auto=compress&cs=tinysrgb', nick_name:'@usuario1', text:'Me encanta esta aplicación'},
      {img:'https://images.pexels.com/photos/101584/pexels-photo-101584.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', nick_name:'@usuario2', text:'Excelente poder tenerla en mi celular'},
      {img:'https://images.pexels.com/photos/206559/pexels-photo-206559.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', nick_name:'@usuario3', text:'cualquier cosa'}
    ];

  constructor(public navCtrl: NavController) {

  }

  onFav(response:string){
    console.log(response);
  }

}

