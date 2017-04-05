import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Notifications} from '../../commons/notifications';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

   notifications:Array<Notifications> = [
      {action: 'reply', img:'https://images.pexels.com/photos/27411/pexels-photo-27411.jpg?w=940&h=650&auto=compress&cs=tinysrgb', nick_name:'@usuario1', text:'Me encanta esta aplicación'},
      {action: 'replatzitt', img:'https://images.pexels.com/photos/101584/pexels-photo-101584.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', nick_name:'@usuario2', text:'Excelente poder tenerla en mi celular'},
      {action: 'mention', img:'https://images.pexels.com/photos/206559/pexels-photo-206559.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', nick_name:'@usuario3', text:'cualquier cosa'}
    ];

  constructor(public navCtrl: NavController) {

  }

}


