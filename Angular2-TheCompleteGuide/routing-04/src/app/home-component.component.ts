import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router                       } from '@angular/router';
import { Subscription                 } from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'app-home-component',
  template: `
    <h1>
      Home Component!
    </h1>
    {{param}}
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  param: string;

  constructor(private router: Router) {
    this.subscription = router.routerState.queryParams.subscribe(
      (queryParam: any) => this.param = queryParam['analytics']
    );
  }

  ngOnInit() {
    console.log('HomeComponent ngOnInit');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
