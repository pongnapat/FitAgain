import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import {  FirebaseListObservable } from 'angularfire2/database';
import { AngularFire } from 'angularfire2'
import { Meal } from '../Meal/Meal';
import { Goal } from '../Goal/Goal';
import {ShareService} from '../Services/ShareService';


@Component({
  selector: 'MyProfile',
  templateUrl: 'MyProfile.html'
})
export class MyProfile {
  user: FirebaseListObservable<any>;
  itemss: FirebaseListObservable<any>;

  activitytype: string;
  KcalActivity: number;
  currentKcal: number;
  gender: string;
  username: string;
  goal: number;


  documentdiv:any;
  hour: number;

  constructor(public navCtrl: NavController, public shareService: ShareService,public angfire:AngularFire, public alertcon :AlertController) {
    this.user = angfire.database.list('/user',{preserveSnapshot:true});

    this.itemss = angfire.database.list('/user',{
      query: {
          orderByKey: true,
          equalTo: shareService.getCurrentUser()
      },preserveSnapshot:true
    });

    this.itemss.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        this.activitytype = snapshot.val().activity;
        this.currentKcal = snapshot.val().currentKcal;
        this.KcalActivity = snapshot.val().KcalActivity;
        this.gender = snapshot.val().gender;
        this.username = snapshot.val().Email;
        this.goal = snapshot.val().goal;
        if(this.currentKcal > this.goal)this.documentdiv="red";
        else this.documentdiv="green";
      });
    });
 }
  activity() {
    this.currentKcal = this.currentKcal-this.hour*this.KcalActivity;
    if(this.currentKcal < 0){this.currentKcal = 0;}
    if(this.currentKcal<this.goal)this.documentdiv="green";
    else this.documentdiv="red";
    this.user.update(this.shareService.getCurrentUser(),{
      currentKcal: this.currentKcal
    })
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page.component);
  }
}
