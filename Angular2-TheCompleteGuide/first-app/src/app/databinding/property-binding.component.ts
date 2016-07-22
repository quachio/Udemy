import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-property-binding',
  template: `
    {{ result }}
  `,
  styles: [],
  //inputs: ['result'], // by doing this you, can remove @Input() decorator, this is bad practice tho
})
export class PropertyBindingComponent  {
  @Input() result: number = 0;
  //result: number = 0;
}
