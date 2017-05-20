import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LogIn } from '../LogIn/LogIn';
import { Register } from '../Register/Register';


@Component({
  selector: 'First',
  templateUrl: 'First.html'
  
})
export class First {
  pages: Array<{title: string, component: any}>;
  constructor(public navCtrl: NavController) {
    
    this.pages = [
      { title: 'LogIn', component: LogIn },
      { title: 'Register', component: Register },
    ];
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page.component);
  }
}