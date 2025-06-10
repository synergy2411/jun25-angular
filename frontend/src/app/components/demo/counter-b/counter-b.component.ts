import { Component } from '@angular/core';
import { CounterService } from '../../../services/counter.service';

@Component({
  selector: 'app-counter-b',
  templateUrl: './counter-b.component.html',
  styleUrl: './counter-b.component.css',
})
export class CounterBComponent {
  constructor(public ctrService: CounterService) {}

  onDecrease() {
    this.ctrService.counter--;
  }
}
