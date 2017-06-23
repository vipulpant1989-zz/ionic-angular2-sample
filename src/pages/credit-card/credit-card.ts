import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import {ThankYouPage} from "../thank-you/thank-you";
import {BankingService} from "../../shared/api/banking-service";

@Component({
  selector: 'page-credit-card',
  templateUrl: 'credit-card.html',
})
export class CreditCardPage {

  cardInfo:any;
  form:any;
  minDate:number = new Date().getFullYear();
  maxDate:number = this.minDate + 10;
  package :any;
  couponData: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public bankService :BankingService,
              public app: App) {

    this.package = navParams.data.package;
    this.couponData = navParams.data.couponData;
    this.form = new FormGroup({
      creditCard: new FormControl("", Validators.required),
      name: new FormControl("", Validators.required),
      cvv : new FormControl("", Validators.required),
      expiryDate : new FormControl("", Validators.required)
    });
    this.form.valueChanges.subscribe((data) => {
      this.cardInfo = data;
    });
  }

  onSubmit(){
    this.cardInfo.mode = 'credit card';
    this.bankService
      .makePayment({cardInfo:this.cardInfo , package: this.package, couponData : this.couponData})
      .subscribe((response)=>{
        this.app.getRootNav().push(ThankYouPage,{ data : response.json() })
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditCardPage');
  }



}
