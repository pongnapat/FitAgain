import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
import { MyApp } from './app.component';
import { First } from '../pages/First/First';
import { LogIn } from '../pages/LogIn/LogIn';
import { Activity } from '../pages/Activity/Activity';
import { FillInfo } from '../pages/FillInfo/FillInfo';
import { Goal } from '../pages/Goal/Goal';
import { Register } from '../pages/Register/Register';
import { MyProfile } from '../pages/MyProfile/MyProfile';
import { Meal } from '../pages/Meal/Meal';
import { addMeal } from '../pages/addMeal/addMeal';
import { Reminder } from '../pages/Reminder/Reminder';
import { AddReminder } from '../pages/AddReminder/AddReminder';
import { AngularFireModule } from 'angularfire2';
import { LocalNotifications } from "@ionic-native/local-notifications";


export const firebaseConfig = {
    apiKey: "AIzaSyBatM2imKBiuePC8OzJZCP3vnDaNN0eO8M",
    authDomain: "fitagain-d76c7.firebaseapp.com",
    databaseURL: "https://fitagain-d76c7.firebaseio.com",
    projectId: "fitagain-d76c7",
    storageBucket: "fitagain-d76c7.appspot.com",
    messagingSenderId: "983097697461"
  };
@NgModule({
  declarations: [
    MyApp,
    First,
    LogIn,
    Activity,
    FillInfo,
    Goal,
    Register,
    Reminder,
    AddReminder,
    MyProfile,
    Meal,
    addMeal,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    First,
    LogIn,
    Activity,
    FillInfo,
    Goal,
    Register,
    Reminder,
    AddReminder,
    MyProfile,
    Meal,
    addMeal,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, LocalNotifications]
})
export class AppModule {}
