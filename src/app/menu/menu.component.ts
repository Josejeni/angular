import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu!:FormGroup
  constructor(private fb:FormBuilder) {
    this.menu=this.fb.group({
      user_name:[]

    })
    
    
   }


  ngOnInit(): void {
  }

}
