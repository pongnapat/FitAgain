import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'Reminder',
  templateUrl: 'Reminder.html'
})
export class Reminder {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['egg', 'water'];

    this.items = [];
    for (let i = 1; i < 3; i++) {
      this.items.push({
        title: 'TO DO LIST ' + i,
        note: '12:30 ',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }

  }
}
