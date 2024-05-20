import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:any;
  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }

  getUser()
  {
   this.userService.getUser().subscribe(
     user=>{
            console.log(user);
            
            
     },
     error=>{
         console.log(error);
         
     }
   )
  }
}
