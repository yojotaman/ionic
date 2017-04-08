import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';

@Component({
    selector: 'fav',
    templateUrl: 'fav.html'
})
export class Fav {
  @Input() key: string;
  @Input() cantidad:number;

  @Output() onFav = new EventEmitter<string>();

  listado: FirebaseListObservable<any>;
  

  constructor(public database: AngularFireDatabase) {
    this.listado = this.database.list('/twitts/');
    }

  test = "";
  icon = "ios-heart-outline";
  
  alerta(){

      if (this.test == ""){
          this.test = "primary";
        this.icon = "ios-heart";
        //obtener el valor inicial
        let cant:any = this.cantidad+1;
        
        this.listado.update(this.key, {
          fav : cant
        });
        
      }
      else{

          this.test = "";
        this.icon = "ios-heart-outline";
        //obtener el valor inicial
        let cant:any = this.cantidad-1;
        
        this.listado.update(this.key, {
          fav : cant
        });
        
      }
      this.onFav.emit("gracias por darle me gusta");
  }


}