import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';


import { First } from '../pages/First/First';
import { MyProfile } from '../pages/MyProfile/MyProfile';
import { Meal } from '../pages/Meal/Meal';
import { Reminder } from '../pages/Reminder/Reminder';
import { ShareService } from '../pages/Services/ShareService';
import { AddReminder } from '../pages/AddReminder/AddReminder';
//https://www.youtube.com/channel/UCEBB26M5pGEMvxsn_ZuAfUg
@Component({
  templateUrl: 'app.html',
  providers: [ShareService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = First;

  pages: Array<{title: string, component: any}>;


  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'MyProfile', component: MyProfile },
      { title: 'Meal', component: Meal },
      { title: 'AddReminder', component: AddReminder },
      { title: 'Logout', component: First }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
