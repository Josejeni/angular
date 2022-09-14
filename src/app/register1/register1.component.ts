import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SubserviceService } from '../subservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.scss']
})
export class Register1Component implements OnInit {

  registerForm!:FormGroup;
  data:any
 

  constructor(private fb:FormBuilder,private subservice:SubserviceService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      name:['',Validators.required],
      age:['',Validators.required],
      gender:['',Validators.required],
      mother_name:['',Validators.required],
      father_name:['',Validators.required],
      user_name:['',Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')
         ]
      ]


    })
  }


  submit(){
    console.log("sumbitted",this.registerForm.value);
    // if (this.loginform.value==null)
    //  console.log("Emty");
    // else{
      alert("Successfully submited")
      this.http.post(" http://127.0.0.1:8000/pwd_encrypt",this.registerForm.value).subscribe(arg=>{
      this.data=arg
      console.log(this.data)
      return this.router.navigate(['/login']);
  })
}

}