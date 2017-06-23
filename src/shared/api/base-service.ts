import { Http , Response,URLSearchParams,Jsonp} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {forIn} from 'lodash';

export class BaseService{

  private apiEndpoint = 'http://localhost:9000/api';

  private getUrl(method){
    return `${this.apiEndpoint}/${method}`;
  }

  constructor(public http:Http, public jsonp:Jsonp){

  }

  public makeCall(method , data ={}) : Observable<Response>{
    let params = new URLSearchParams();
    let url = this.getUrl(method);
    forIn(data, (value , key) =>{
      params.set(key, value);
    });
      return this.http.get(url, {search: params});
  }

  public postCall(method, data ={}): Observable<Response>{
    return this.http.post(this.getUrl(method) , data);
  }
}
