import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
})
export class ReceiptsComponent implements OnInit {
  name: string;
  many: string;
  constructor() { 
    console.log(1334);
  }


  ngOnInit() {
  }

}
