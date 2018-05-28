import { NgModule } from '@angular/core';
import{LoginComponent} from '../login/login.component';
import {BillService} from '../Service/bill.service';
import { FormsModule } from '@angular/forms';




@NgModule({
  imports: [
    FormsModule,
   
   
  ],
  //exports: [RouterModule],
  declarations: [LoginComponent],

})
export class LoginModule { }
