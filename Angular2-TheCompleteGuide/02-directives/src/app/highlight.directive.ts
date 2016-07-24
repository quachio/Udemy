// import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';
import { Directive, HostListener, HostBinding } from '@angular/core';


@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  private backgroundColor = 'white';

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = 'green';
  };

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'white';
  }
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  constructor() {
  }

  /*
  // This is where you inject service and stuff
  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }
  */
}
