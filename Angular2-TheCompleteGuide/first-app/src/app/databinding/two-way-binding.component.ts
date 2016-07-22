import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-two-way-binding',
  template: `
    <input type="text" [(ngModel)]="person.name">
    <input type="text" [(ngModel)]="person.name">
  `,
})
export class TwoWayBindingComponent  {
  // Properties
  person = {
    name: 'Max',
    age: 27
  };

}
