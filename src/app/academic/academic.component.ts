import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SubserviceService } from '../subservice.service';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.scss']
})
export class AcademicComponent implements OnInit {
  academicForm:FormControl|any
  data:any

  constructor(private fb:FormBuilder,private subservice:SubserviceService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.academicForm=this.fb.group({
      school_building:[''],
      cam_area:[''],
      pas:[''],
      built_area:[''],
      play_area:[''],
      no_building:[''],
      provision:[''],
      no_staircases:[''],
      no_lift:[''],
      class_rooms:[''],
      srooms:[''],
      plab:[''],
      clab:[''],
      blab:[''],
      mlab:[''],
      comlab:[''],
      llab:[''],
      hslab:[''],
      library:[''],
      auditorium:[''],
      counroom:[''],
      parlor:[''],
      proom:[''],
      sick_room:[''],
      canteen:[''],
      secroom:[''],
      oroom:[''],
      stoilet:[''],
      std_toilet:[''],
      rooms:[''],
      spcl_stud:[''],
      wall:[''],
      if_wall:[''],
      cctv:[''],
      ds:[''],
      no_camera:[''],
      guard:[''],
      no_guard:[''],
      fguard:[''],
      no_fguard:[''],
      water:[''],
      drainage:[''],
      mmeals:[''],
      no_buses:[''],
      gps:[''],
      nola:[''],
      first_aid:[''],
      no_water:[''],
      no_sbus:[''],
      free_tran:['']

    })
  }
  onsubmit(){
    this.subservice.aca(this.academicForm.value).subscribe(arg=>{
      this.data=arg
      this.router.navigate(["/login"]);
    })
  }

}
