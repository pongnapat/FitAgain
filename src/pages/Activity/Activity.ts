import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { FillInfo } from '../FillInfo/FillInfo';
import { First } from '../First/First';
import { ShareService } from '../Services/ShareService';

@Component({
  selector: 'Activity',
  templateUrl: 'Activity.html'
})
export class Activity {
  selected: string;
  currentUser: any;
  items: FirebaseListObservable<any>;
  pageback: Array<{title: string, component: any}>;
  pageforward: Array<{title: string, component: any}>;
  constructor(public navCtrl: NavController, db: AngularFireDatabase, public shareService: ShareService) {
    this.items = db.list('/activity');
    this.currentUser = this.shareService.getCurrentUser();
  this.pageforward = [
      { title: 'FillInfo', component: FillInfo },
    ];
    this.pageback = [
      { title: 'First', component: First },
    ];
    
  }
  openPage(page) {
    this.navCtrl.setRoot(page.component);  
  }
  addToDB(selected,kcal){
    this.shareService.setActivity(selected,kcal);
    this.navCtrl.setRoot(FillInfo);
  }
}


