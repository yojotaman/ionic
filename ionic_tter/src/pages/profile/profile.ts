import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {Profile} from '../../commons/profile'
import {twitt} from '../../commons/twitt'

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  //  notifications:Array<Notifications> = [
  //     {action: 'reply', img:'https://images.pexels.com/photos/27411/pexels-photo-27411.jpg?w=940&h=650&auto=compress&cs=tinysrgb', nick_name:'@usuario1', text:'Me encanta esta aplicación'},
  //     {action: 'replatzitt', img:'https://images.pexels.com/photos/101584/pexels-photo-101584.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', nick_name:'@usuario2', text:'Excelente poder tenerla en mi celular'},
  //     {action: 'mention', img:'https://images.pexels.com/photos/206559/pexels-photo-206559.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', nick_name:'@usuario3', text:'cualquier cosa'}
  //   ];

  me:Profile = {
    "img":'https://images.pexels.com/photos/206559/pexels-photo-206559.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    "nick_name":'@usuario3',
    "interactions":1,
    "github": "usuario3",
    "twitter": "usuario3",
    "medium": "usuario3",
    "bio": "usuario3 es uno de nuestros amigos más listos, realiza acrobacias y le gustan los deportes extremos."
  };


  listado:Array<twitt> = [
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@usuario3', text:'test 1234'},
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@usuario3', text:'test 1234'},
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@usuario3', text:'test 1234'},
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@usuario3', text:'test 1234'},
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@usuario3', text:'test 1234'},
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@usuario3', text:'test 1234'},
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@usuario3', text:'test 1234'},
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@usuario3', text:'test 1234'}
    ];

    


  constructor(public navCtrl: NavController) {
    this.me.interactions = this.listado.length;
  }


}


// interface Notifications{
//   img:string;
//   nick_name:string;
//   text:string;
//   action:string;
// }

