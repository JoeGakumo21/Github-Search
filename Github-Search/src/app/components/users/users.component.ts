import { UsersService } from './../../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   usersDetails:any  

  constructor( private userservice:UsersService) { 
    this.userservice.getUsersDetails().subscribe((usersDetails:any[])=>{
      console.log(usersDetails);
      this.usersDetails
    })
  
    
  }

  ngOnInit(): void {
  }

}
