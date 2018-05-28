import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { BillService } from '../Service/bill.service';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfoComponent implements OnInit {
    public api :User[];
    constructor(private billservice:BillService) { }
  
    ngOnInit() {
      this.billservice.getlogin().subscribe((response:any)=>{this.api=response;});
    
    }

}
