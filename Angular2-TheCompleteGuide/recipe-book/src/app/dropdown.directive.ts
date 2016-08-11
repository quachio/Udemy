import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective {
  private isOpened = false;

  @HostBinding('class.open') get opened() {
    //console.log('HostBinding: opened', this.isOpened);
    return this.isOpened;
  }

  @HostListener('click') open() {
    //console.log('open');
    this.isOpened = true;
  }

  @HostListener('mouseleave') close() {
    //console.log('close');
    this.isOpened = false;
  }
}
