import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2'

import { ShareService } from "../Services/ShareService";
import { Meal } from "../Meal/Meal";

@Component({
  selector: 'addMeal',
  templateUrl: 'addMeal.html'
})
export class addMeal {
  MealList: FirebaseListObservable<any>;
  Mealuser: FirebaseListObservable<any>;
  user: FirebaseListObservable<any>;
  itemss: FirebaseListObservable<any>;
  cals: any;
  ArrayMeal: any;
  EventArray: any
  NowcurrentKcal: number;
  constructor(private navCtrl: NavController, private shareService: ShareService, public alertCtrl: AlertController, public angfire: AngularFire) {
    this.Mealuser = angfire.database.list('/user/'+shareService.getCurrentUser()+'/meal');
    
    this.MealList = this.angfire.database.list('/meal',{preserveSnapshot:true});
    let temlist = [];
    this.MealList.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        temlist.push(snapshot.val())
      });
    });
    this.ArrayMeal = temlist;
    this.initializeItems();

    this.user = angfire.database.list('/user',{preserveSnapshot:true});
    this.itemss = this.angfire.database.list('/user',{
      query: {
          orderByKey: true,
          equalTo: this.shareService.getCurrentUser()
      },preserveSnapshot:true
    });
    this.itemss.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        this.NowcurrentKcal = snapshot.val().currentKcal;
      });
    });
    
  }
  cancel(){
     this.navCtrl.setRoot(Meal);
  }
  addMeal(name,calories,image){
    let alert = this.alertCtrl.create({
        title: 'Amount',
        message: 'How much do you eat or drink?',
        inputs: [{ name: 'amount' }],
        buttons: [
          { text: 'Cancel' },
          {
            text: 'Ok',
            handler: data => {
              if(data.amount != 0)this.saveMeal(name,calories*data.amount,data.amount,image)
            }
          }
        ]
      });
    alert.present();
  }
  saveMeal(name,calories,amount,image){
    this.NowcurrentKcal = this.NowcurrentKcal-0+calories;
    this.user.update(this.shareService.getCurrentUser(),{
      currentKcal: this.NowcurrentKcal
    })

    this.Mealuser.push({
      name: name,
      cal: calories,
      amount: amount,
      img: image
    });
    this.navCtrl.setRoot(Meal);
  }

  initializeItems() {
    this.EventArray = this.ArrayMeal;
  }
  

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.EventArray = this.EventArray.filter((EventArray) => {
        return (EventArray.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }



}
