import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { ReceiptsComponent} from './receipts/receipts.component';
import { BillComponent} from './bill/bill.component';

const appRoutes: Routes = [
  {path:'login' ,component:LoginComponent},
  { path: 'bill', component:BillComponent},
  { path: 'receipts', component:ReceiptsComponent},

  

]
@NgModule({
  declarations: [
    AppComponent,
   
    LoginComponent,
    ReceiptsComponent,
    BillComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  //exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
