import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  alert:boolean = false;
  editRestaurent=new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private resto:CommonService, private router:ActivatedRoute) { }

  ngOnInit(): void {
   this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
  this.editRestaurent=new FormGroup({
    name: new FormControl(result['name']),
    address: new FormControl(result['address']),
    mobile: new FormControl(result['mobile']),
    email: new FormControl(result['email'])
})
})
  }
  updateResto(){
    this.resto.updateResto(this.router.snapshot.params.id, this.editRestaurent.value).subscribe((result)=>{
 console.log(result);
    })
    this.alert=true;
  }
  closeAlert(){
    this.alert=false;
  }
}
