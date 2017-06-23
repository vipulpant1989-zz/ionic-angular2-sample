
import { Http ,Jsonp} from '@angular/http';
import {Injectable} from '@angular/core';
import {BaseService} from './base-service';

@Injectable()
export class BankingService extends BaseService{


  constructor(public http:Http , public jsonp :Jsonp){
    super(http, jsonp);
  }

  public getAll(){
    return this.makeCall('banks');
  }

  public makePayment(requestData){
    return this.postCall('banks/pay',requestData)
  }

  public doNetBankingPayment(requestData){
    return this.postCall('netbanking/pay', requestData);
  }

}
