import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-another',
  template: `
  <article>
    <ng-content></ng-content>
  </article>
  `,
})
export class AnotherComponent  {
}
