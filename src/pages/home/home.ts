import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MiscellaneousPage } from '../Miscellaneous/Miscellaneous';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  showImages(){
    this.navCtrl.push( MiscellaneousPage );
  }

  test(){
    console.log('Test');

  }

}
