import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DebitCardPage} from "../debit-card/debit-card";
import {CreditCardPage} from "../credit-card/credit-card";
import {NetBankingPage} from "../net-banking/net-banking";


/**
 * Generated class for the PaymentDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-payment-detail',
  templateUrl: 'payment-detail.html',
})
export class PaymentDetailPage {

  params:any;
  debitCard:Component  = DebitCardPage;
  creditCard:Component = CreditCardPage;
  netBanking:Component = NetBankingPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params = this.navParams.data;
  }

  ionViewDidLoad() {
  }

}
