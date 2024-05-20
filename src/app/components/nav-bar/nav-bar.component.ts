import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public loggedIn=false;
  user:any=null;


  constructor(private loginService:LoginService,public login:LoginService) { }

  ngOnInit(): void {

    this.loggedIn=this.loginService.isLoggedIn()
  }

  logoutUser()
  {
    this.loginService.logout()
    location.reload()
  }

}
  