import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Register1Component } from './register1/register1.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginformComponent } from './loginform/loginform.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Generalinfo1Component } from './generalinfo1/generalinfo1.component';
import { RecognitionComponent } from './recognition/recognition.component';
import { GhomeComponent } from './ghome/ghome.component';
import { StaffdetailsComponent } from './staffdetails/staffdetails.component';
import { CurricularComponent } from './curricular/curricular.component';
import { SchoolTimingComponent } from './school-timing/school-timing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MenuComponent } from './menu/menu.component';
import{MatToolbarModule}from '@angular/material/toolbar';
import{MatSidenavModule}from '@angular/material/sidenav';
import{MatIconModule}from '@angular/material/icon';
import{MatListModule}from '@angular/material/list';
import{MatButtonModule}from '@angular/material/button';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AcademicFormComponent } from './Academicform/academicform.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,  
    Register1Component, UserprofileComponent, HomeComponent,
    LoginformComponent,
    Generalinfo1Component,
    RecognitionComponent,
    GhomeComponent,
    AcademicFormComponent,
    StaffdetailsComponent,
    CurricularComponent,
    SchoolTimingComponent,
    MenuComponent,
    ScholarshipComponent,
    ForgotpasswordComponent,
    
    

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
   
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
