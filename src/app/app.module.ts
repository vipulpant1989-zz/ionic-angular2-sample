import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {PackagesPage} from '../pages/packages/packages';
import {PaymentPackage} from '../pages/packages/package';
import {PackageService} from '../shared/api/package-service';
import { HttpModule,JsonpModule } from '@angular/http';



import { CashierApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {PaymentDetailPage} from '../pages/payment-detail/payment-detail';
import {FormsModule} from "@angular/forms";
import {BankingService} from "../shared/api/banking-service";
import {CreditCardPage} from "../pages/credit-card/credit-card";
import {DebitCardPage} from "../pages/debit-card/debit-card";
import {NetBankingPage} from "../pages/net-banking/net-banking";
import {ThankYouPage} from "../pages/thank-you/thank-you";

@NgModule({
  declarations: [
    CashierApp,
    HomePage,
    PackagesPage,
    PaymentPackage,
    PaymentDetailPage,
    CreditCardPage,
    DebitCardPage,
    NetBankingPage,
    ThankYouPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(CashierApp,{
      tabsHideOnSubPages: true
    }),
    HttpModule,
    JsonpModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CashierApp,
    HomePage,
    PackagesPage,
    PaymentDetailPage,
    CreditCardPage,
    DebitCardPage,
    NetBankingPage,
    ThankYouPage
  ],
  exports:[
    PaymentPackage,
    PaymentDetailPage,
    CreditCardPage,
    DebitCardPage,
    NetBankingPage,
    ThankYouPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PackageService,
    BankingService
  ]
})
export class AppModule {}
