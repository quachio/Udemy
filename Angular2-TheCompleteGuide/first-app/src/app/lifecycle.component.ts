import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewChild,
  ContentChild,
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #boundParagraph>{{bindable}}</p>
    <p>{{boundParagraph.textContent}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  bindable: number;

  @ViewChild('boundParagraph')
  boundParagraph: HTMLElement;

  @ContentChild('boundContent')
  boundContent: HTMLElement;

  constructor() { }

  ngOnChanges() {
    this.log('ngOnChanges: ' + this.bindable);
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck(){
    this.log('ngOnCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
    console.log(this.boundContent);
  }

  ngAfterContentChecked(){
    this.log('ngContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
    console.log(this.boundParagraph);
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');

  }

  private log(hook: string) {
    console.log(hook);
  }

}
