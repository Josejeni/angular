import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { SubserviceService } from '../subservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { group } from '@angular/animations';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  Userprofile:FormGroup|any
  id:any
  data:any

  
  constructor(private subservice:SubserviceService,private activate:ActivatedRoute,private router:Router,private http:HttpClient,private fb:FormBuilder) { }

  ngOnInit(): void {
    // this.id=this.activate.snapshot.params['id']
    console.log(this.id);
    

    this.Userprofile=this.fb.group({
      // id:new FormControl(''),
      name:[Validators.required],
      age:[Validators.required],
      gender:[Validators.required],
      father_name:[Validators.required],
      mother_name:[Validators.required],
      user_name:[Validators.required],
      password:[Validators.required]   
    })
    this.subservice.profile().subscribe(arg=>{
      this.data=arg;
      console.log(this.data);
      
      this.loadData()
    })
  }
  
loadData(){
  this.Userprofile=new FormGroup({
    // id:new FormControl(this.data.id),
    name:new FormControl(this.data.name),
    age:new FormControl(this.data.age),
    gender:new FormControl(this.data.gender),
    user_name:new FormControl(this.data.user_name),
    // password:new FormControl(this.data.password),
    father_name:new FormControl(this.data.father_name),
    mother_name:new FormControl(this.data.mother_name),
})
}
update(){
  // this.id=this.activate.snapshot.params['id']
  console.log("submited"); 
  this.subservice.update(this.Userprofile.value).subscribe((arg: any)=>{
  this.data=arg;
  alert("Updated")
  // this.Id=this.data.id;
  this.router.navigate(['/home/userprofile'])
  })
  
}
Back(){
  this.router.navigate(['/home'])
}
deleterec(){
  console.log(this.id);  
  this.subservice.udel().subscribe(arg=>{
  this.data=arg;  
  this.router.navigate(['/login']);
  },error =>
  {this.router.navigate(['/login'])});

}
}
