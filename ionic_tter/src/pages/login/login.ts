import { Component } from '@angular/core';

import { AlertController, LoadingController, NavController } from 'ionic-angular';

import {TabsPage} from '../tabs/tabs';

import {UserService} from '../../services/user.service';

//import {DBService} from '../../services/db.services';

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
        private userservice:UserService
        //private dbService:DBService 
        ) {

            //dbService.openDatabase();
            //dbService.createTable();
            //console.dir(dbService.getAll());
    }

    ngOnInit(){
        console.log("arranco el init");
        //si el usuario esta logueado redireccionar a la home
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