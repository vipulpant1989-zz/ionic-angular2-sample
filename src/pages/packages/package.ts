import { Component, Input } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

@Component({
  selector : 'payment-package',
  templateUrl: './package.html'})
export class PaymentPackage{

  @Input()package:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}




