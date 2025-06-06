import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') bgColor!: string;
  @HostBinding('style.color') color!: string;
  @Input() favColor: string = 'grey';

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log('Mouse Entered');
    this.bgColor = this.favColor;
    this.color = '#fff';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    console.log('Mouse Leave');
    this.bgColor = 'transparent';
    this.color = '#333';
  }

  // constructor(private elRef: ElementRef) {
  //   // console.log(this.elRef.nativeElement);
  //   this.elRef.nativeElement.style.backgroundColor = '#ff45ff';
  // }
}

// <div class="appHighlight"> </div>
// <app-highlight></app-highlight>
// <div appHighlight> </div>
