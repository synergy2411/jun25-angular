import {
  Component,
  Optional,
  Self,
  SkipSelf,
  ViewEncapsulation,
} from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.Emulated,
  // providers: [CounterService]
})
export class AppComponent {
  title = 'frontend';
  toggle = false;

  constructor(@Optional() private counterService: CounterService) {}
}
