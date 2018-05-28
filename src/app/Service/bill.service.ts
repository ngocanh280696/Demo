import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {User} from '../user';

@Injectable()
export class BillService {
  private apiUrl="http://5b07daa092b3b4001425a0e4.mockapi.io/api/user";
  constructor(private http:Http) { }
  getlogin() :Observable <User[]>{
   return this.http.get(this.apiUrl).map((response:Response)=>response.json())
  }

  
}

