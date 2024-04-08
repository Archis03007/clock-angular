import { Component } from '@angular/core';

@Component({
  selector: 'app-clock-display',
  templateUrl: './clock-display.component.html',
  styleUrl: './clock-display.component.scss'
})
export class ClockDisplayComponent {

  time: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.setTime(); // Call setTime when the component initializes
    setInterval(() => {
      this.setTime(); // Update time every second
    }, 1000);
  }

  setTime() {
    const dt = new Date();
    this.time = dt.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit'});

    console.log(this.time);

  }

}
