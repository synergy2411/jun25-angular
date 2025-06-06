import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCapture]',
})
export class CaptureDirective {
  constructor() {
    console.log('Capture Event Directive in action');
  }

  @HostListener('myCustomeEvent')
  onCapture() {
    console.log('Captured!!!');
  }
}
