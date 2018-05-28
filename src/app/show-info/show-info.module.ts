import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowInfoComponent } from './show-info.component';
import { BillService } from '../Service/bill.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [BillService],
  declarations: [ShowInfoComponent]
})
export class ShowInfoModule { }
