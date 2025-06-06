import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrl: './directive-example.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class DirectiveExampleComponent {
  dynamicStyle = { color: 'green', backgroundColor: 'lightgrey' };

  dynamicClass = { 'my-border': true, 'my-feature': false };

  products = [
    { title: 'iPhone16', price: 9999, isAvailable: true, qty: 100 },
    { title: 'Sumsung', price: 7999, isAvailable: false, qty: 0 },
    { title: 'Motorola', price: 5990, isAvailable: true, qty: 200 },
  ];

  tab = 1;

  onMouseEnter() {
    this.dynamicStyle.color = 'blue';
  }
  onMouseLeave() {
    this.dynamicStyle.color = 'green';
  }

  onDynamicClasses() {
    this.dynamicClass['my-border'] = !this.dynamicClass['my-border'];
    this.dynamicClass['my-feature'] = !this.dynamicClass['my-feature'];
  }

  theEvent() {
    console.log('Inside Class - Custom Event');
  }
}
