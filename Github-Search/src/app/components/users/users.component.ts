import { UsersService } from './../../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   usersDetails:any  ;
   repository:any;
   searchUser:any;

  constructor( private userservice:UsersService) { 
    this.userservice.getUsersDetails().subscribe((usersDetails:any[])=>{
      console.log(usersDetails);
      this.usersDetails=usersDetails;
    })
    this.userservice.getProfileRepositories().subscribe((repository:any[] | undefined)=>{
      this.repository=repository;
    })
    
  }

  ngOnInit(): void {
  }

}
