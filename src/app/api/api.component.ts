import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { BillService } from '../Service/bill.service';
import {User} from '../user';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
  providers:[BillService]
})
export class ApiComponent implements OnInit {
  public api :User[];
  constructor(private billservice:BillService) { }

  ngOnInit() {
    this.billservice.getlogin().subscribe((response:any)=>{this.api=response;});
  }

}
