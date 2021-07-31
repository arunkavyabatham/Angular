import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  alert:boolean = false;
  addRestaurent=new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private resto:CommonService) { }

  ngOnInit(): void {
  }
  creatResto(){
    this.resto.addResto(this.addRestaurent.value).subscribe((result)=>{
      this.alert=true;
      this.addRestaurent.reset({});
    })
  }
  closeAlert(){
    this.alert=false;
  }
}
