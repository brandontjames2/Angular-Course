import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() increment = new EventEmitter<{num: number}>();
  timer: NodeJS.Timer;
  incrementedNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.timer = setInterval(() => {
      this.increment.emit({num: this.incrementedNumber++});
      console.log(this.incrementedNumber);
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
  }
}
