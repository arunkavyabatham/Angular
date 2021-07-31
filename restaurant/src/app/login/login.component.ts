import { Component, OnInit } from '@angular/core';

import {CommonService} from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string;
password:string;
  constructor(private resto:CommonService, private router:Router) { }

  ngOnInit(): void {
  }
logIn(){
  if(this.email=='abc@gmail.com' && this.password=="xyz"){
    console.log(this.email=='abc@gmail.com' && this.password=="xyz");
    this.router.navigate(['/list']);
            return true;
  }
  else{
    alert("please Enter valid Email");
  }
}
}
