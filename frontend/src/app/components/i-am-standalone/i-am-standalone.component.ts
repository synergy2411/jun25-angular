import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OutputComponent } from './output/output.component';

@Component({
  selector: 'app-i-am-standalone',
  standalone: true,
  imports: [FormsModule, OutputComponent],
  templateUrl: './i-am-standalone.component.html',
  styleUrl: './i-am-standalone.component.css',
})
export class IAmStandaloneComponent {
  title = 'New way of creating component';
}
