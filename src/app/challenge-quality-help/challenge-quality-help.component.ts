import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';


@Component({
  selector: 'app-challenge-quality-help',
  templateUrl: './challenge-quality-help.component.html',
  styleUrls: ['./challenge-quality-help.component.css']
})
export class ChallengeQualityHelpComponent implements OnInit {


  @Input() variable :number=1;

  @Output() data2:EventEmitter<number> =new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  changevalue1(n1:number){

this.variable=n1;
this.data2.emit(this.variable);
  }
    
}
