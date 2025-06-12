import { Component, Host, Input, Self } from '@angular/core';
import { CounterService } from '../../../services/counter.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
  // providers : [CounterService]
})
export class UserInfoComponent {
  @Input() user: any;

  constructor(private counterService: CounterService) {}

  onInput(inputValue: string) {
    this.user.votes = inputValue;
  }
}
