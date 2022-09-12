import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,FormArray} from '@angular/forms';

@Component({
  selector: 'app-scholarship',
  templateUrl: './scholarship.component.html',
  styleUrls: ['./scholarship.component.scss']
})
export class ScholarshipComponent implements OnInit {
ScholarshipForm!:FormGroup
  constructor(private fb :FormBuilder) { }
  ngOnInit(): void {
    this.ScholarshipForm = this.fb.group({
      no_scholarship:[],
      boys:[],
      girls:[],
      govt:[],
      private:[],   
      number:this.fb.array([])
    });
  }

  Number():FormArray{
    return this.ScholarshipForm.get('number') as FormArray;
  }

  newNumber():FormGroup{
    return this.fb.group({
      no_scholarship:[],
      no_boys:[],
      no_girls:[],
      govt:[],
      private:[]
    });
  }

  addNumber(){
    this.Number().push(this.newNumber());
  }

  removeNumber(i:any){
    this.Number().removeAt(i);
  }


}
