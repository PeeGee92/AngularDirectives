import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .MoreThanFive {
      background: blue;
      color: white;
    }
  `]
})
export class AppComponent {
  showText = true;
  btnClicks = [];
  clicksCount = 0;

  toggleBtn() {
    this.showText = !this.showText;
    this.clicksCount++;
    this.btnClicks.push("Button clicked " + this.clicksCount + " times");
  }
}
