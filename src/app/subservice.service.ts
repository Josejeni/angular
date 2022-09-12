import { Injectable } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { MainserviceService } from './mainservice.service';
@Injectable({
  providedIn: 'root'
})
export class SubserviceService {
  constructor(private mainservice:MainserviceService) { }
  login(data:any){
    const url="/log_encrypt"    
    return this.mainservice.login(url,data);
  }
  profile(){
    const path="/user_profile"
    const url=path;
    return this.mainservice.profile(url);
  }
  update(data:any){
    const path="/update"
    const url=path;
    return this.mainservice.update(url,data);
  }
  general(data:any){
    const url="/general"
    return this.mainservice.general(url,data);
  }
  general_info(){
    const url="/general"
    return this.mainservice.general_info(url);
  }
  gen(){
    const path="/generalinfo/"
    const url=path;
    return this.mainservice.gen(url);
  }
  aca(data:any){
    const path="/post_academic"
    return this.mainservice.academic(path,data)

  }
  staff(data:any){
    const url="/post_staffdetails"
    return this.mainservice.staff(url,data)
  }
  udel(){
    const url="/user_deleted/"
    const path=url;
    return this.mainservice.udel(path)
  }
}
