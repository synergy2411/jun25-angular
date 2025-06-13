import { Component, computed, signal, effect } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-test-demo',
  templateUrl: './test-demo.component.html',
  styleUrl: './test-demo.component.css',
  standalone: true,
  imports: [MatButtonModule],
})
export class TestDemoComponent {
  x = signal(0);
  y = signal(0);

  z = computed(() => this.x() + this.y());

  searchTerm = signal('');

  title = 'demotest component';

  constructor() {
    effect((cleanUpFn) => {
      console.log('Z value changed to ', this.z());
      cleanUpFn(() => {
        console.log('Clean Up!');
      });
    });

    effect(() => {
      console.log('Search changes : ', this.searchTerm());
    });
  }

  changeSearchTerm(inputValue: string) {
    this.searchTerm.set(inputValue);
  }

  increaseX() {
    this.x.update((value) => value + 1);
    this.y.set(10);
  }
}
