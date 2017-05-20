import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable } from 'angularfire2'

import { ShareService } from "../Services/ShareService";
import { addMeal } from "../addMeal/addMeal";

@Component({
  selector: 'Meal',
  templateUrl: 'Meal.html'
})
export class Meal {
  Mealuser: FirebaseListObservable<any>;
  items: FirebaseListObservable<any>;
  goal: number;
  textColor:any;
  NowcurrentKcal: number;
  constructor(private navCtrl: NavController, private shareService: ShareService, public alertctrl: AlertController, public angfire: AngularFire) {
    this.Mealuser = angfire.database.list('/user/'+shareService.getCurrentUser()+"/meal");
    this.items = this.angfire.database.list('/user',{
      query: {
          orderByKey: true,
          equalTo: shareService.getCurrentUser()
      },preserveSnapshot:true
    });
    this.items.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        this.goal= snapshot.val().goal;
        this.NowcurrentKcal = snapshot.val().currentKcal;
        if(this.NowcurrentKcal > this.goal)this.textColor="red";
        else this.textColor="green";
      });
    });
  }
  addMeal(){
    this.navCtrl.setRoot(addMeal);
  }
}
