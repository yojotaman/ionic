import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NotificationPage } from '../pages/notification/notification';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {VerNotificationPage} from '../pages/notification/verNotification';
import { SignInPage } from '../pages/login/signin';
import {Fav} from '../components/fav/fav';
import {UserService} from '../services/user.service';
//import {DBService} from '../services/db.services';
import {AdMob} from 'ionic-native';

var links = [
  {component: LoginPage, name:'Login', segment:'login'},
  {component: TabsPage, name: 'tabs', segment: 'tabs' },
  {component: VerNotificationPage, name: 'notification', segment: 'notification/:id' }

];

//FIREBASE
import {AngularFireModule} from 'angularfire2';

export const CONFIG = {
    apiKey: "AIzaSyAz6MCMFhyBOGClpYaQIP10PdFt_V3PFE8",
    authDomain: "prueba-exito.firebaseapp.com",
    databaseURL: "https://prueba-exito.firebaseio.com",
    projectId: "prueba-exito",
    storageBucket: "prueba-exito.appspot.com",
    messagingSenderId: "334839116393"
  };



//CLOUD NOTIFICATION PAGE

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const CLOUDSETTINGS: CloudSettings ={
    core:{
      app_id: '3a7c9817'
    },
    push: {
      sender_id: '334839116393',
      pluginConfig: {
        ios:{
          badge:true,
          sound:true
        }, 
        android:{
          iconColor:'#343434'
        }
      }
    }
};


//

@NgModule({
  declarations: [
    MyApp,
    NotificationPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage,
    VerNotificationPage,
    Fav,
    SignInPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {}, links), 
    AngularFireModule.initializeApp(CONFIG),
    CloudModule. forRoot(CLOUDSETTINGS)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotificationPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage,
    VerNotificationPage,
    Fav,
    SignInPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    AdMob
    //DBService
  ]
})
export class AppModule {}
