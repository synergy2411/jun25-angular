import { Component } from '@angular/core';
import { CounterService } from '../../../services/counter.service';

@Component({
  selector: 'app-counter-a',
  templateUrl: './counter-a.component.html',
  styleUrl: './counter-a.component.css',
  providers: [CounterService],
})
export class CounterAComponent {
  constructor(public ctrService: CounterService) {}

  onIncrease() {
    this.ctrService.counter++;
  }
}
