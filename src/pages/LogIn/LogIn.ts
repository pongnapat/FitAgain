import { Component } from '@angular/core';
import { AuthProviders, AuthMethods, AngularFire } from 'angularfire2'
import { NavController } from 'ionic-angular';

import { MyProfile } from '../MyProfile/MyProfile';
import { ShareService } from '../Services/ShareService';
import { First } from '../First/First';

@Component({
  selector: 'LogIn',
  templateUrl: 'LogIn.html'
})
//https://github.com/angular/angularfire2/blob/master/docs/4-querying-lists.md
export class LogIn {
  email: any;
  password: any;
  constructor(public navCtrl: NavController, public angfire:AngularFire,public shareService: ShareService) { }
  goBack(){this.navCtrl.setRoot(First);}
  login(){
    this.angfire.auth.login({
      email: this.email,
      password: this.password
    },{
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    }).then((response) => {
      this.shareService.setCurrentUser(this.email);
      this.navCtrl.setRoot(MyProfile);
    }).catch((error) =>{
      console.log(error);
    });
  }
}
