import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FillInfo } from '../FillInfo/FillInfo';
import { MyProfile } from '../MyProfile/MyProfile';
import {ShareService} from '../Services/ShareService';

import {AngularFire, FirebaseObjectObservable } from 'angularfire2'

@Component({
  selector: 'Goal',
  templateUrl: 'Goal.html'
})
export class Goal {
  goal: number;
  pageback: Array<{title: string, component: any}>;
  pageforward: Array<{title: string, component: any}>;

  userlist: FirebaseObjectObservable<any>;

  constructor(public navCtrl: NavController, public shareService: ShareService, public angfire: AngularFire) {
    this.userlist = angfire.database.object('/user/'+this.shareService.getCurrentUser());
    this.pageforward = [
      { title: 'MyProfile', component: MyProfile },
    ];
    this.pageback = [
      { title: 'FillInfo', component: FillInfo },
    ];
  }
  //https://www.youtube.com/watch?v=rGKFUqRPu8E
  openPage(page) {
    this.shareService.setGoal(this.goal);
    this.shareService.setCurrentKcal(this.goal);
    this.userlist.set({
          password: this.shareService.getPassword(),
          Email: this.shareService.getEmail(),
          activity: this.shareService.getActivity(),
          BirthDate: this.shareService.getBirthDate(),
          gender: this.shareService.getGender(),
          height: this.shareService.getHeight(),
          weight: this.shareService.getWeight(),
          goal: this.goal,
          currentKcal: this.goal,
          KcalActivity: this.shareService.getKcalAc()
    });
    this.navCtrl.setRoot(page.component);  
  }
}

