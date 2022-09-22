import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SubserviceService } from '../subservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu:FormGroup
  constructor(private fb:FormBuilder,private subservice:SubserviceService,private router:Router,private http:HttpClient) {
    this.menu=this.fb.group({
      email:[''],
      Pin:['']

    })
    
    
   }


  ngOnInit(): void {
  }
  data:any
  otp:any=0
  number:any
  submit(){
    console.log(this.menu.value);
    this.http.post(" http://127.0.0.1:8000/password_reset",this.menu.value).subscribe ((arg:any)=>{
      this.data=arg
      console.log(this.data.msg)
      this.number=this.data.msg
      if (this.data.detail){
        this.otp=2
      }
      else{
        this.otp=1
        alert(this.data.msg);
        this.router.navigate(['/menu']);
      }
      
  })
  }
  pincheck(){
    this.subservice.pin(this.menu.value).subscribe((arg:any)=>{
      this.data=arg
      console.log(this.data.data)
      if (this.data.data==1){
        this.router.navigate(["/login"])
      }
      
      else {
        this.otp=2
        console.log("hiii");
        this.router.navigate(['/menu'])
      }
    })

  }



  submit1(){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    
  }

}
