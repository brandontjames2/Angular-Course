import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
  h3 {
    color: lightblue;
  }`,
  `.whiteText {
    color: white;
  }`,
  `.number-holder {
    display: grid;
    grid-template: auto/ 1fr 1fr;
    justify-items: center;
  }`
  ]
})
export class AppComponent {
  username = "";
  displayDetails = false;
  timesClicked = [];

  evens: number[] = [];
  odds: number[] = [];

  onReset() {
    this.username = "";
  }

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.timesClicked.push(new Date(new Date().getTime()));
  }

  onIncrement(eventData: {num: number}) {
    if(eventData.num % 2 == 0) {
      this.evens.push(eventData.num);
    } else {
      this.odds.push(eventData.num);
    }
  }
}
