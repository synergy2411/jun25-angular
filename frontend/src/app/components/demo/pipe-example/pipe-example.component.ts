import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.css',
})
export class PipeExampleComponent {
  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Asynchronously delivered value');
    }, 2000);
  });

  contactNumber = 9876543210;

  greetings = 'Hello World!';

  todoCollection = [
    { label: 'Shopping', status: 'pending' },
    { label: 'Planting', status: 'completed' },
    { label: 'insurance', status: 'pending' },
    { label: 'Grocery', status: 'completed' },
  ];
  filteredStatus = '';
}
