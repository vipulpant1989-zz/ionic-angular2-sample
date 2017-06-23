import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import {PaymentDetailPage} from '../payment-detail/payment-detail';
import {PackageService} from "../../shared/api/package-service";

/**
 * Generated class for the PackagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-packages',
  templateUrl: 'packages.html',
})
export class PackagesPage {

  @Input()packages : Array<any>;

  packageForm:FormGroup;
  formData:any;
  couponCode : any;
  selectedPackage : any = {};
  pending:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public packageService:PackageService) {


    this.packageForm = new FormGroup({
      "selectedPackage": new FormControl(''),
      "customPackage": new FormControl('',Validators.required),
      "couponCode": new FormControl('')
    });

    this.packageForm.valueChanges.subscribe((data) => {
      if (data.customPackage.length > 0) {
        data.selectedPackage = '';
      }
      this.formData = data;
    });
  }

  onCustomPackage(){
    this.selectedPackage = {
      price : Number.parseInt(this.packageForm.value.customPackage)
    }
    this.packageForm.value.selectedPackage = this.selectedPackage.price;
  }

  onPackageSelection(packageObj:any){
    this.selectedPackage = packageObj;
  }

  applyCoupon(event){
    let couponCode = event.target.value;
    if(couponCode.length === 5){
      this.pending = true;
      this.packageService.applyCoupon(couponCode).subscribe((response) => {
         this.couponCode = response.json();
         this.pending = false;
      });
    }
  }

  onContinueButtonClick(){
    this.navCtrl.push(PaymentDetailPage, {
      package: this.selectedPackage,
      couponData: this.couponCode
    });
  }

}
