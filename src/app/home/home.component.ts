import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Home:FormGroup|any
  id:any

  constructor(private route:ActivatedRoute,private router:Router) { }


  ngOnInit(): void {
    // this.id=this.route.snapshot.params['id'];
  }
  submit(){
      this.router.navigate(['home/userprofile'])
  }
  submitgen(){
    this.router.navigate(['home/general'])
    console.log(this.id);
    
  }
}
