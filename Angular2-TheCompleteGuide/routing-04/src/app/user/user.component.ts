import { Component, OnDestroy                      } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';
import { Subscription                              } from "rxjs/Rx";

@Component({
    moduleId: module.id,
    selector: 'app-user-component',
    template: `
      <h1>User Component</h1>
      <!--
      <a [routerLink]="['../']">Home</a>
      <a [routerLink]="['/user']">User</a>
      -->
      <button (click)="onNavigate()">Go Home</button>
      <a [routerLink]="['detail']">Detail</a>
      <a [routerLink]="['edit']">Edit</a>
      <hr>
      {{id}}
      <hr>
      <router-outlet></router-outlet>
    `,
    directives: [ ROUTER_DIRECTIVES ]
})
export class UserComponent implements OnDestroy {
  private subscription: Subscription
  id: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    //this.id = activatedRoute.snapshot.params['id']; This is fine if we get here the first time

    // This second way is the best way
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
  }

  onNavigate() {
    this.router.navigate(['/'], {queryParams: {'analytics': 100}});
  }

  ngOnDestroy() { // Prevent memory leak
    this.subscription.unsubscribe();
  }

}
