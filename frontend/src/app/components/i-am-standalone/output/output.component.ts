import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.css',
  standalone: true,
  imports: [FormsModule],
})
export class OutputComponent {
  title = 'the output component';
}
