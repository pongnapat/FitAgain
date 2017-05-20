import { Component } from '@angular/core';

export class ShareService {  

    username: string;
    email: string;
    activity: string;
    KcalActivity: number;
    BirthDate: any;
    gender: string;
    height: number;
    weight: number;
    goal: number;
    currentKcal: number;
    password: string;
    constructor() { this.email = ''; }
    setpassword(p){this.password = p;}
    setEmail(Name) { this.email = Name; }
    setCurrentUser(Name) { this.username = Name.replace('.','_'); }
    setActivity(Name, kcal) { 
        this.activity = Name; 
        this.KcalActivity = kcal;
    }
    setFillmore(BirthDate,gender,height,weight) {
        this.BirthDate= BirthDate;
        this.gender= gender;
        this.height= height;
        this.weight= weight; 
    }
    setGoal(goal) { this.goal= goal; }
    setCurrentKcal(Kcal){ this.currentKcal = Kcal; }

    getKcalAc(){ return this.KcalActivity; }
    getPassword(){ return this.password; }
    getCurrentUser() { return this.username; } 
    getEmail() { return this.email; } 
    getActivity() { return this.activity; } 
    getBirthDate() { return this.BirthDate; } 
    getGender() { return this.gender; } 
    getHeight() { return this.height; } 
    getWeight() { return this.weight; } 
    getGoal() { return this.goal; } 
    getCurrentKcal() { return this.currentKcal; } 
}