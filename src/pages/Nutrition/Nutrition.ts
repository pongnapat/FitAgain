import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


@Component({
  selector: 'Nutrition',
  templateUrl: 'Nutrition.html'
})

export class Nutrition {
  menutop: Array<{title: string, calpercent: string, cal: string}>;
  menus: Array<{title: string, cal: string}>;
  constructor(public navCtrl: NavController) {
    this.menutop = [
      { title: 'Breakfast', calpercent:'0%', cal:'0' },
      { title: 'Lunch', calpercent:'0%' , cal:'0'},
      { title: 'Dinner', calpercent:'0%', cal:'0' },
      { title: 'Snacks', calpercent:'0%', cal:'0' }
    ];
    this.menus = [
      { title: 'Total Calories', cal:'0' },
      { title: 'Net Calories', cal:'0' },
      { title: 'Goal', cal:'0' },
      { title: 'Food Highest In Calories', cal:'0' }
    ];
  }
 
}
