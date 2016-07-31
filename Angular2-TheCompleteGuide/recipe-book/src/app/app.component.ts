import { Component                       } from '@angular/core';
import { ROUTER_DIRECTIVES               } from '@angular/router';
import { HeaderComponent                 } from './header.component';
import { RecipeService                   } from './recipes/recipe.service';

@Component({
  moduleId:    module.id,
  selector:    'quachio-root',
  templateUrl: 'app.component.html',
  directives:  [ HeaderComponent, ROUTER_DIRECTIVES],
  providers:   [ RecipeService ]
})
export class AppComponent {
}
