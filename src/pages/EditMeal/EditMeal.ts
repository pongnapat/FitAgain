import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { FormGroup,FormControl } from '@angular/forms';

import { Meal } from '../Meal/Meal';
import { ShareService } from "../Services/ShareService";

@Component({
  selector: 'EditMeal',
  templateUrl: 'EditMeal.html'
})
export class EditMeal {
  pages: Array<{title: string, component: any}>;
  Name: string
  Description: string
  Kcal: number
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Add Meal', component: Meal },
    ];
    this.Name = navParams.get('name');
    this.Description = navParams.get('description');
    this.Kcal = navParams.get('kcal');
  }
   openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component,{
      InputName: this.Name, InputDescription: this.Description, InputKcal: this.Kcal
    });
  }
}
