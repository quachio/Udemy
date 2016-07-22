import { Component }          from '@angular/core';
import { LifecycleComponent } from './lifecycle.component';

@Component({ // Component MetaData
  moduleId:  module.id, // If you use external template like html and css, then module.id is require
  selector: 'app-root',
  template: `
    <h1>Root Compoent</h1>
    <app-lifecycle *ngIf="!delete" [bindable]="boundValue">
      <p #boundContent>{{test}}</p>
    </app-lifecycle>
    <button *ngIf="!delete" (click)="delete = true">Click to Delete</button>
    <button *ngIf="delete" (click)="delete = false">Click to Restore</button>
    <button (click)="test = 'Change value'">Click to Change Content</button>
    <button (click)="boundValue = 2000">Click to Change Binding</button>
  `,
  directives: [ LifecycleComponent ],
})
export class AppComponent {
  // Prooperties
  title = 'Does this show up?';
  delete: boolean = false;
  test = 'Starting value';
  boundValue = 1000;
}
