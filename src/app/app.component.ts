import { Component, Input, Output } from '@angular/core';
import { finished } from 'stream';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number [] = [];
  evenNumbers: number [] = [];
   
  onIntervalFired(firedNumber: number){
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber)
    }  
    console.log(firedNumber)
  }

  OnClearArrays () {
    this.oddNumbers.splice(0, this.oddNumbers.length);
    this.evenNumbers.splice(0, this.evenNumbers.length);
  }
}
