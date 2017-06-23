import { Component } from '@angular/core';
import { App,NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";

/**
 * Generated class for the ThankYouPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-thank-you',
  templateUrl: 'thank-you.html',
})
export class ThankYouPage {

  response:any;

  constructor(public app: App,public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.data);
    this.response = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThankYouPage');
  }

  doOnClick(){
    this.app.getRootNav().setRoot(HomePage);
  }

}
