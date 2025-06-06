import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-custom-event',
  templateUrl: './custom-event.component.html',
  styleUrl: './custom-event.component.css',
})
export class CustomEventComponent {
  @Output() myCustomeEvent = new EventEmitter();

  onClick() {
    this.myCustomeEvent.emit();
  }
}
