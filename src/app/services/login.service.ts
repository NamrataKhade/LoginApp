import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8080"

  constructor(private http:HttpClient) { }
//calling the server to generate token

generateToken(credentials:any)
//token generate
{
return this.http.post(`${this.url}/token`,credentials)
}

  //for Login User

  loginUser(token:any)
  {
    localStorage.setItem("token",token)
    return true;
  }

  //To check that is user is  logged in or not
  isLoggedIn()
  {
   let token= localStorage.getItem("token");
   if(token==undefined || token=='' || token==null)
   {
     return false;
   }else{
     return true;
   }
   }

   public setUser(user:any){

    localStorage.setItem('user',JSON.stringify(user));



  }
  //for log out the user
  logout(){
    localStorage.removeItem('token');
    return true;
  }

  //for getting the TOKEN

  getToken()
  {
    return localStorage.getItem("token")
  }
  
  getUser()
  {
    let userStr=localStorage.getItem('user');
    if (userStr!=null)
    {
      return JSON.parse(userStr);
    }
    else{
      this.logout();
      return null;
    }
  }

}
