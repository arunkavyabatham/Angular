import { Component, OnInit } from '@angular/core';

import {CommonService} from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    alert:boolean = false;
    createUser=new FormGroup({
      name: new FormControl(''),
      pass: new FormControl(''),
      email: new FormControl('')
    })
    constructor(private resto:CommonService) { }
  
    ngOnInit(): void {
    }
    resUser(){
      console.log(this.createUser.value)
      this.resto.createUser(this.createUser.value).subscribe((result)=>{
        console.log(result);
      })
      
    }
    closeAlert(){
      this.alert=false;
    }
  }
  