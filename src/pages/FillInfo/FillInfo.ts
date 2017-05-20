import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Goal } from '../Goal/Goal';
import { Activity } from '../Activity/Activity';
import {ShareService} from '../Services/ShareService';

@Component({
  selector: 'FillInfo',
  templateUrl: 'FillInfo.html'
})
export class FillInfo {
  BirthDate: any;
  gender: string;
  height: number;
  weight: number;
  pageback: Array<{title: string, component: any}>;
  pageforward: Array<{title: string, component: any}>;
  constructor(public navCtrl: NavController, public shareService: ShareService) {
    this.pageforward = [
      { title: 'Goal', component: Goal }
    ];
    this.pageback = [
      { title: 'Activity', component: Activity }
    ];
  }
  openPage(page) {
    this.shareService.setFillmore(this.BirthDate,this.gender,this.height,this.weight)
    this.navCtrl.setRoot(page.component);  
  }


}
