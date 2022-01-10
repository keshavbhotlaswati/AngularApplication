import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
@Input() public a:number=1;


  constructor() { }

 

  ngOnInit(): void {
  }

  changevariablevalue(n1:number){
this.a=n1;
  }

changevariablevalue2(n2:number){
  this.a=n2;
}

}