import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { twitt } from '../../commons/twitt';

import { UserService } from '../../services/user.service';

import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listado: FirebaseListObservable<any>;

  //  listado:Array<twitt> = [
  //     {img:'https://images.pexels.com/photos/27411/pexels-photo-27411.jpg?w=940&h=650&auto=compress&cs=tinysrgb', nick_name:'@usuario1', text:'Me encanta esta aplicación'},
  //     {img:'https://images.pexels.com/photos/101584/pexels-photo-101584.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', nick_name:'@usuario2', text:'Excelente poder tenerla en mi celular'},
  //     {img:'https://images.pexels.com/photos/206559/pexels-photo-206559.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', nick_name:'@usuario3', text:'cualquier cosa'}
  //   ];

  constructor(
    public navCtrl: NavController,
    private userService: UserService,
    public database: AngularFireDatabase
      ) {

        this.listado = this.database.list('/twitts');

        this.listado.push({
          img:'https://images.pexels.com/photos/27411/pexels-photo-27411.jpg?w=940&h=650&auto=compress&cs=tinysrgb', 
          nick_name:'@usuario1', 
          text:'Me encanta esta aplicación'
        });
        this.listado.push({
          img:'https://images.pexels.com/photos/101584/pexels-photo-101584.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', nick_name:'@usuario2', text:'Excelente poder tenerla en mi celular'
        });
        this.listado.push(
          {img:'https://images.pexels.com/photos/206559/pexels-photo-206559.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', nick_name:'@usuario3', text:'cualquier cosa'}
        );

  }

  onFav(response:string){
    console.log(response);
  }

}

