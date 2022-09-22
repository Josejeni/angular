import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MainserviceService } from '../mainservice.service';
import { SubserviceService } from '../subservice.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  ForgorpasswordForm !:FormGroup
  constructor(private fb : FormBuilder, private subservice: SubserviceService,private mainservice:MainserviceService,private router:Router) { 
    this.ForgorpasswordForm = this.fb.group({
      email:[''],
      pin:[''],
      password:['']
    })

  }
 
  ngOnInit(): void {
  }
  data:any
  datapwd:any

submit(){
  this.subservice.pwdreset(this.ForgorpasswordForm.value).subscribe(arg=>{
    this.data=arg
    if (this.data.detail){
      swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Invalid mail id',
        width: '400px',
        timer: 5000,
        heightAuto: false,
        showConfirmButton: false,
        
      })
    }
    else{
      alert(this.data.msg);
      this.router.navigate(['/forgotpassword']);
    }
  })
}

pincheck(){
  this.subservice.pin(this.ForgorpasswordForm.value).subscribe((arg:any)=>{
    this.data=arg
    this.datapwd=this.ForgorpasswordForm.value
    console.log(this.datapwd['password'])
    console.log(this.data.password)
    if (this.data){
      this.subservice.pinupdate(this.data).subscribe((arg:any)=>{
      })
      this.router.navigate(["/login"])
    }
    
    else {
      swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Invalid OTP',
        width: '400px',
        timer: 5000,
        heightAuto: false,
        showConfirmButton: false,
        
      })
      this.router.navigate(['/forgotpassword'])
    }
  })
}

}
