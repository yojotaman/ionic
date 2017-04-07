import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Profile } from '../../commons/profile';
import { twitt } from '../../commons/twitt';

import {Camera} from 'ionic-native';
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  profile:Profile = {
    "img":'https://images.pexels.com/photos/206559/pexels-photo-206559.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
     nick_name:'@usuario3',
    "interactions":5,
    "github": "usuario3_3",
    "twitter": "usuario3_3",
    "medium": "usuario3_3",
    "bio": "usuario3 es una de las peladas más tesas de nuestra comunidad"
  };

  listado:Array<twitt> = [
      {img:'https://images.pexels.com/photos/206559/pexels-photo-206559.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', nick_name:'@usuario3', text:'test 1234'},
      {img:'https://images.pexels.com/photos/206559/pexels-photo-206559.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', nick_name:'@usuario3', text:'test 1234'},
      {img:'https://images.pexels.com/photos/206559/pexels-photo-206559.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', nick_name:'@usuario3', text:'test 1234'},
      {img:'https://images.pexels.com/photos/206559/pexels-photo-206559.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', nick_name:'@usuario3', text:'test 1234'},
      {img:'https://images.pexels.com/photos/206559/pexels-photo-206559.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', nick_name:'@usuario3', text:'test 1234'},
      {img:'https://images.pexels.com/photos/206559/pexels-photo-206559.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', nick_name:'@usuario3', text:'test 1234'},
      {img:'https://images.pexels.com/photos/206559/pexels-photo-206559.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', nick_name:'@usuario3', text:'test 1234'},
      {img:'https://images.pexels.com/photos/206559/pexels-photo-206559.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', nick_name:'@usuario3', text:'test 1234'}
    ];

    


  constructor(public navCtrl: NavController) {
    this.profile.interactions = this.listado.length;
  }

  foto():void{
    Camera.getPicture(
      {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: true,
        correctOrientation: true  //Corrects Android orientation quicks
      }
    ).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    let base64Image = 'data:image/base64,' + imageData;
    }, (err) => {
    // Handle error
    });
  }
}