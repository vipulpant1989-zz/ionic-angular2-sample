import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PackageService} from '../../shared/api/package-service';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  packages:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public packageService:PackageService) {
    packageService.getAll().subscribe((response)=>{console.log(response.json());this.packages = response.json()});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
