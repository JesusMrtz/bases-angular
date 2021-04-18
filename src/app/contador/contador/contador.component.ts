import { Component } from '@angular/core';


@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html'
})
export class ContadorComponent {
  counter = 0;
  base = 10;

  incrementCounter(): void {
    this.counter += this.base;
  }

  decrementCounter(): void {
    this.counter -= this.base;
  }
}
