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
import {Fav} from '../components/fav/fav';
import {UserService} from '../services/user.service';

import {AngularFireModule} from 'angularfire2';

export const CONFIG = {
    apiKey: "AIzaSyAz6MCMFhyBOGClpYaQIP10PdFt_V3PFE8",
    authDomain: "prueba-exito.firebaseapp.com",
    databaseURL: "https://prueba-exito.firebaseio.com",
    projectId: "prueba-exito",
    storageBucket: "prueba-exito.appspot.com",
    messagingSenderId: "334839116393"
  };

//import {DBService} from '../services/db.services';

//refactor por router

var links = [
  {component: LoginPage, name:'Login', segment:'login'},
  {component: TabsPage, name: 'tabs', segment: 'tabs' },
  {component: VerNotificationPage, name: 'notification', segment: 'notification/:id' }

];



@NgModule({
  declarations: [
    MyApp,
    NotificationPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage,
    VerNotificationPage,
    Fav
  ],
  imports: [
    IonicModule.forRoot(MyApp, {}, links), 
    AngularFireModule.initializeApp(CONFIG)
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
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService
    //DBService
  ]
})
export class AppModule {}
