import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillComponent } from './bill.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
   
  ],
  //exports: [RouterModule],
  declarations: [BillComponent]
})
export class BillModule { }
