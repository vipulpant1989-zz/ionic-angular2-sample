import { Component } from '@angular/core';
import { App,NavController, NavParams } from 'ionic-angular';
import {BankingService} from "../../shared/api/banking-service";
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import {ThankYouPage} from "../thank-you/thank-you";
/**
 * Generated class for the NetBankingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-net-banking',
  templateUrl: 'net-banking.html',
})
export class NetBankingPage {

  banks:Array<any>;
  formGroup:any;
  amount:any;

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams, public bankingService: BankingService) {
    this.amount = this.navParams.data.package.price;
    this.bankingService.getAll().subscribe((response)=>{ this.banks = response.json() });
    this.formGroup = new FormGroup({
       "selectedBank" : new FormControl("" , Validators.required)
    });
  }

  onSubmit(){
    let requestData = {
      bankName : this.formGroup.value.selectedBank,
      mode : 'net banking',
      package: this.navParams.data.package,
      couponData: this.navParams.data.couponData
    };
    this.bankingService.doNetBankingPayment(requestData).subscribe((response)=>{
      this.app.getRootNav().push(ThankYouPage,{ data : response.json() });
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NetBankingPage');
  }

}
