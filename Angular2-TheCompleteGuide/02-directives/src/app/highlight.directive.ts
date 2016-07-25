// import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';
import { Directive, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  private backgroundColor: string;

  @Input() defaultColor =   'white';
  @Input() highlightColor = 'green';

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  }
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  // How to pass the event object to the method handling the event
  @HostListener('click', ['$event'])
    onClick(event) {
      console.log('Event Target' + event.target);
  }

  ngOnInit() {
    console.log('The highlight directive is initialized');
    this.backgroundColor = this.defaultColor;
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
