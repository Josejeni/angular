import { group } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SubserviceService } from '../subservice.service';
// import { SubserviceService } from '../subservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup |any;
  data:any
  id:any
  


  constructor(private subservice:SubserviceService,private router:Router){
    this.loginform=new FormGroup({
      user_name:new FormControl('',[Validators.required]),
      password:new FormControl('')
    })
  }
  
  ngOnInit(): void {
  
    
  }
  onSubmit(){
    console.log("sumbitted",this.loginform.value);

    if (!this.loginform.value) {
      console.log(this.loginform.value);   
      alert("login successfully")
      this.subservice.login(this.loginform.value).subscribe(arg =>{
      // this.data=arg
      console.log(arg)
      if(arg!==null){
        // this.id=arg 
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/home',{"id":arg}]);
      } 
      })
    }
    else{
      console.log("Emty field");
      alert("invalid")
      
      
    }  
  }
  
}

