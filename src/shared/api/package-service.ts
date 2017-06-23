
import { Http ,Jsonp} from '@angular/http';
import {Injectable} from '@angular/core';
import {BaseService} from './base-service';

@Injectable()
export class PackageService extends BaseService{


  constructor(public http:Http , public jsonp :Jsonp){
    super(http, jsonp);
  }

  public getAll(){
    return this.makeCall('packages',{});
  }

  public applyCoupon(code){
    return this.makeCall('packages/apply/coupon',{code : code})
  }

}
