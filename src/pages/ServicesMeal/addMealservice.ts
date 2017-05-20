import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable } from 'angularfire2'
import { ShareService } from "../Services/ShareService";
import { NavController } from 'ionic-angular';
import { Meal } from "../Meal/Meal";

export class addMealservice {  
    Mealuser: FirebaseListObservable<any>;
    MealList: FirebaseListObservable<any>;
    constructor(private shareService: ShareService,  public angfire: AngularFire, private navCtrl: NavController) {
        this.Mealuser = angfire.database.list('/user/'+shareService.getCurrentUser()+"/meal");
        
    }
    addToDB(selected,amount){
        let cal: number;
        this.MealList = this.angfire.database.list('/meal',{
            query: {
                orderByKey: true,
                equalTo: selected
            },preserveSnapshot:true
        });

        this.MealList.subscribe(snapshots => {
            snapshots.forEach(snapshot => {
                cal = (snapshot.val().Cal)*amount ;
            });
        });

        this.Mealuser.push({
            name: selected,
            amount: amount,
            Kcal: cal
        });
        this.navCtrl.setRoot(Meal);
    }
}