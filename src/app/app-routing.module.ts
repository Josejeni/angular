import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicComponent } from './academic/academic.component';

import { CurricularComponent } from './curricular/curricular.component';
import { Generalinfo1Component } from './generalinfo1/generalinfo1.component';
import { GhomeComponent } from './ghome/ghome.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginformComponent } from './loginform/loginform.component';
import { MenuComponent } from './menu/menu.component';
import { RecognitionComponent } from './recognition/recognition.component';
import { Register1Component } from './register1/register1.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { SchoolTimingComponent } from './school-timing/school-timing.component';
import { StaffdetailsComponent } from './staffdetails/staffdetails.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  {path:'loginform',component:LoginComponent},
  {path:'register1',component:Register1Component} ,
 
  {path:'login',component:LoginformComponent},
  {path:'home',component:HomeComponent,
  children:[
   
      {path:'userprofile',component:UserprofileComponent},
      {path:'general',component:Generalinfo1Component},

  ]

},
 
  {path:'recognition',component:RecognitionComponent},
  {path:'ghome',component:GhomeComponent},

  {path:"staffdetails",component:StaffdetailsComponent},
  {path:"curricular",component:CurricularComponent},
  {path:'schooltiming',component:SchoolTimingComponent},
  {path:'academic',component:AcademicComponent},
  {path:'menu',component:MenuComponent},
  {path:"scholarship",component:ScholarshipComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
