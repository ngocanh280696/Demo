import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BillService} from './Service/bill.service';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { ReceiptsComponent} from './receipts/receipts.component';
import { BillComponent} from './bill/bill.component';
import { ShowInfoComponent } from './show-info/show-info.component';
  

const appRoutes: Routes = [
  {path:'show-info',component:ShowInfoComponent},
  {path:'login' ,component:LoginComponent},
  {path:'receipts' ,component:ReceiptsComponent},
  {path:'bill' ,component:BillComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    ShowInfoComponent,
    LoginComponent,
    ReceiptsComponent,
    BillComponent
   
    ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
   
  ],
 exports: [RouterModule],
  providers: [BillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
