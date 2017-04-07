import { Component } from '@angular/core';

import { AlertController, LoadingController, NavController } from 'ionic-angular';

import {TabsPage} from '../tabs/tabs';

import {UserService} from '../../services/user.service';

//import {DBService} from '../../services/db.services';

import {Geolocation} from 'ionic-native';

import {AdMob} from 'ionic-native';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    user = {"email": "", "password":""};

    constructor(
        private alertCtrl: AlertController, 
        public loadingCtrl: LoadingController,
        public navCtrl: NavController,
        private userservice:UserService,
        private AdMob:AdMob
       
        ) {

           
    }

    ionViewWillEnter(){
        console.log("arranco el init");
        
        Geolocation.getCurrentPosition().then(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        });

        let watch = Geolocation.watchPosition().subscribe(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        });

        // to stop watching
        watch.unsubscribe();

        AdMob.prepareInterstitial('test-banner').then(
            ()=>{
                AdMob.showInterstitial();
            }
        );
        
    }

    login = ():void=>{
        if (this.user.email != "" && this.user.password != ""){

            let usuarios;


            let loading = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading.present();

            let login:false;
            this. userservice.loginUser(this.user.email, this.user.password)
                .then(
                    (response) =>{
                        loading.dismiss();
                        if (response!== undefined){
                            this.navCtrl.push(TabsPage);
                        }
                        else{
                            let alert = this.alertCtrl.create({
                            title: 'Login',
                            subTitle: 'Usuario y/o contraseña invalida.',
                            buttons: ['Aceptar']
                        });
                        alert.present();
                        }
                    }
                )           
        }
        else{
            let alert = this.alertCtrl.create({
                    title: 'Login',
                    subTitle: 'Complete todos los campos.',
                    buttons: ['Aceptar']
                });
                alert.present();
        }

       
    }


    signIn = ():void=>{
        alert("signIn");
    }


}