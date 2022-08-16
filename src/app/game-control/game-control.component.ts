import { Component, OnInit, EventEmitter, Output, Input, Inject } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  @Output ("OnClearArrays") OnClearArrays: EventEmitter<any> = new EventEmitter()
  gameEvents;
  lastNumber = 0
  shouldShowMessage = true
  startingMessage = 'Start the game by clicking the green button'
  constructor( ) { }

  ngOnInit(): void {
  }
  //  pusher() {
  //   if (this.gameEvents.length === 0) {
  //     this.gameEvents.push(Math.random())
  //   } else 
  //   this.gameEvents.push(this.gameEvents.length + 1) 
  // }
  
  onStart() {
   this.gameEvents = setInterval(() => {
    this.intervalFired.emit(this.lastNumber + 1)
    this.lastNumber ++
   }, 1000)
   this.shouldShowMessage = false
  }
  onEnd() {
    clearInterval(this.gameEvents)

  }
  onFinish () {
    this.OnClearArrays.emit();
    this.lastNumber = 0
    this.shouldShowMessage = true
  }
}
