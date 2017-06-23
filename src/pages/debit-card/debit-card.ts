import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import {ThankYouPage} from "../thank-you/thank-you";
import {BankingService} from "../../shared/api/banking-service";

/**
 * Generated class for the DebitCardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-debit-card',
  templateUrl: 'debit-card.html',
})
export class DebitCardPage {

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
      debitCard: new FormControl("", Validators.required),
      name: new FormControl("", Validators.required),
      cvv : new FormControl("", Validators.required),
      expiryDate : new FormControl("", Validators.required)
    });
    this.form.valueChanges.subscribe((data) => {
      this.cardInfo = data;
    });
  }

  onSubmit(){
    this.cardInfo.mode = 'debit card';
    this.bankService
      .makePayment({cardInfo:this.cardInfo , package: this.package, couponData : this.couponData})
      .subscribe((response)=>{
        this.app.getRootNav().push(ThankYouPage,{ data : response.json() })
      });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DebitCardPage');
  }

}
