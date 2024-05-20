import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmployeeComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'product-management';

  // constructor(){
  //   console.log("Constructor called");
  // }

  // @HostListener('click',['$event'])
  // show(){
  //  alert("Hii !!");
  // }

  Cdata:any;

  getdata(val:any){

    this.Cdata=val;
  }
}
