import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public a:number=1;
  


@Output() public data :EventEmitter <number> = new EventEmitter<number>();

  constructor(private route:Router) {
 
   } 




  ngOnInit(): void {
  }

  select(n:number){
  
this.a=n;


  }

  changenextvalue(n:number){
this.a=n;
    this.data.emit(this.a);


  }



}
