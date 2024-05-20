import { Component, EventEmitter } from '@angular/core';
import { Book } from '../book';

class abc{
  constructor(){
    console.log("abc constructor called !!");
  }
  show(){
    console.log("Hello World !!");
  }

}


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  preserveWhitespaces:true,
  viewProviders:[abc,Book],
  inputs:['Pdata'],
  outputs:['childevent']
})
export class EmployeeComponent {
  // constructor( private _abc:abc, private _book:Book){
  //   console.log("component constructor called");
  //   _abc.show();
    // Pdata:any;

    childevent=new EventEmitter();

    senddata(val:any){
      // console.log(val);
      this.childevent.emit(val);
    }
  }

//}
