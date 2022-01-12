import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Input() public variable1:number=1;
  

show1:boolean=false;
show2:boolean=false;
show3:boolean=false;
show4:boolean=false;
@Output() public data :EventEmitter <number> = new EventEmitter<number>();

  constructor(private router:Router ) {
 
   } 




  ngOnInit(): void {
  }

  
  changevalue3(n5:number){
    
    this.variable1=n5;
    console.log("variable recienced" );
  }

  changenextvalue(n:number){
this.variable1=n;
    this.data.emit(this.variable1);


  }

  toggle1(){
    this.show1=!this.show1;

  
   return this.show1;
  }

  toggle2(){
    this.show2=!this.show2;

   return this.show2;
  }
  toggle3(){
    this.show3=!this.show3;
 
   return this.show3;
  }
  toggle4(){
    this.show4=!this.show4;
 
   return this.show4;
  }
  
}
