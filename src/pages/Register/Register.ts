import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AuthProviders, AuthMethods, AngularFire } from 'angularfire2'

import {ShareService} from '../Services/ShareService';
import { Activity } from '../Activity/Activity';
import { First } from '../First/First';
//https://www.youtube.com/watch?v=O_jxEC0hWcA
@Component({
  selector: 'Register',
  templateUrl: 'Register.html'
})
export class Register {
  email: string;
  password: string;
  conpassword: string;
  error: any;
  //userlist: FirebaseListObservable<any>;////////////////////////////////////////////////////////////////////////////
  constructor(public navCtrl: NavController,public angfire:AngularFire,public shareService: ShareService) {
     //this.userlist = angfire.database.list('/userlist');////////////////////////////////////////////////////////////////////////////
     //build an empty leave and push reminder, meal and more about list by using angfire.database.list('/userlist/.../...');
  }
  goBack(){this.navCtrl.setRoot(First);}
  register(){
    if(this.conpassword == this.password){
     this.angfire.auth.createUser({
       email: this.email,
       password: this.password
     }).then(
       (success) => {
        this.angfire.auth.login({
          email: this.email,
          password: this.password
        },{
          provider: AuthProviders.Password,
          method: AuthMethods.Password
        }).then((response) => {
          this.shareService.setpassword(this.password);
          this.shareService.setEmail(this.email);
          this.shareService.setCurrentUser(this.email);
          this.navCtrl.setRoot(Activity);
        }).catch((err) =>{
          console.log(err);
          this.error = err;
        });
       }).catch(
         (err) => {
           console.log(err);
           this.error = err;
         }
       )
    }
    else this.error = "password is not match!"
  }
}
