import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private username:string;
  private personalToken="12d9347274bb38a8a007b762fe0a52114da83880";

  constructor( private http:HttpClient) { 
    console.log("Service working as expected");
    this.username="JoeGakumo21";
    
  }
  getUsersDetails(){
 
    return this.http.get('https://api.github.com/users/'+this.username + "?client_id=" + this.personalToken)
    .map((res: any) => {
      return res
  })

  }
}
