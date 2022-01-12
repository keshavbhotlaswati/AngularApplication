import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  public variable4:number=1;

  constructor() {


   }
   increment(){
     this.variable4=this.variable4++;
     
   }
   decrement(){
     if(this.variable4<=0){
       console.log("the variable is 0");
     }
     this.variable=this.variable--;
   }

}
