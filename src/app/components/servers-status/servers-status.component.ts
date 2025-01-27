import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers-status',
  standalone: true,
  imports: [],
  templateUrl: './servers-status.component.html',
  styleUrl: './servers-status.component.css'
})
export class ServersStatusComponent implements OnInit, OnDestroy {
  currentStatus = 'online';
  private interval?: ReturnType<typeof setInterval>;

  constructor() {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      const random = Math.random();

      if (random < 0.5) {
        return this.currentStatus = 'online';
      } else if (random < 0.9) { 
        return this.currentStatus = 'offline';
      } else {
        return this.currentStatus = 'unknown';
      }
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
