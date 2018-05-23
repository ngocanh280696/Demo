import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  succsess: string = 'login succsess';
  fail: string ='User or Password Sai ';
  nocation: string;
  userList: {username: string,password: string}[];
  constructor() {
    this.userList = [{'username': 'admin', 'password': '123456' }];
   }
  
  getlogin(){
   if(this.username == this.userList['username'] && this.password == this.userList['password']){
     this.nocation = this.succsess;
   }else{
     this.nocation = this.fail;
   }
 
  }
  ngOnInit() {
  }

}
