import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrl: './directive-example.component.css',
})
export class DirectiveExampleComponent {
  dynamicStyle = { color: 'green', backgroundColor: 'lightgrey' };

  dynamicClass = { 'my-border': true, 'my-feature': false };

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
}
