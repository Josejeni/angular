import { group } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SubserviceService } from '../subservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {
  loginForm:FormControl |any 
  data:any
  formvar:any
  error=0

  constructor(private subservice:SubserviceService,private router:Router) { 
   
  }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      user_name:new FormControl(),
      password:new FormControl()
    })
    
  }
  onSubmit(){
    if(this.loginForm.valid){
    this.error=0
    this.formvar=new FormData();
    this.formvar.append("username",this.loginForm.get('user_name').value);
    this.formvar.append("password",this.loginForm.get('password').value);
    console.log("sumbitted",this.formvar );


    
    this.subservice.login(this.formvar).subscribe(arg =>{
    console.log(arg) 
    this.data=arg

    if(this.data.detail){
        console.log("invalid");
        this.error=1 
      } 
    else{
      localStorage.setItem('token',this.data.access_token)
      localStorage.setItem('token_type',this.data.token_type)
      this.router.navigate(['/home']); 
    }
      })   
    
  }

}

}
