import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrl: './user-img.component.css',
})
export class UserImgComponent {
  @Input() user: any;

  @Output()
  childEvent = new EventEmitter();

  onClick(user: any) {
    this.childEvent.emit(user);
  }
}
