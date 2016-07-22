import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">Click me</button>
  `,
  styles: [],
})
export class EventBindingComponent {
  // Properties
  @Output('clickable') clicked = new EventEmitter<string>(); // Emit event with type string

  // Methods
  onClicked() {
    this.clicked.emit('It worked!'); // This string pass to $event
    /*
    console.log('onClicked: it worked');
    alert('It Work');
    */
  }

}
