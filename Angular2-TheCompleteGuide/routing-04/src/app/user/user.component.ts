import { Component                 } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-user-component',
    template: `
      <h1>User Component</h1>
      <a [routerLink]="['../']">Home</a>
      <a [routerLink]="['/user']">User</a>
      <button (click)="onNavigate()">Go Home</button>
    `,
    directives: [ ROUTER_DIRECTIVES ]
})
export class UserComponent {
  constructor(private router: Router) {

  }
  onNavigate() {
    this.router.navigate(['/']);
  }

}
