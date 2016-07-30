import { Component }         from '@angular/core'
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  moduleId:    module.id,
  selector:    'app-root',
  templateUrl: 'app.component.html',
  directives:  [ ROUTER_DIRECTIVES ],
  styles: [`
    .active {
      border: 1px solid red;
    }
  `]
})
export class AppComponent {
}
