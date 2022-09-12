import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare function openNav() :void
  

@Component({
  selector: 'app-ghome',
  templateUrl: './ghome.component.html',
  styleUrls: ['./ghome.component.scss']
})
export class GhomeComponent implements OnInit {

  constructor(private router:Router) {
    openNav();
   }
  id:any
 
  ngOnInit(): void {
  }

  submit(){
    this.router.navigate(['/general',{'id':this.id}])
}

  //     console.log(this.generalForm.value);
  //     this.subservice.general_info(this.generalForm.value).subscribe(arg =>{
  //       console.log(arg) 
  //       this.data=arg
  //       this.router.navigate(['/home']);
    
  //    })
  //   }

  }

