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
  }`
  ]
})
export class AppComponent {
  username = "";
  displayDetails = false;
  timesClicked = [];

  onReset() {
    this.username = "";
  }

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.timesClicked.push(new Date(new Date().getTime()));
  }
}
