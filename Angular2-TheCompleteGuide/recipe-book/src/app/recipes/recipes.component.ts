import { Component, OnInit }   from '@angular/core';
import { RecipeListComponent } from './recipe-list';

@Component({
  moduleId:    module.id,
  selector:    'quachio-recipes',
  templateUrl: 'recipes.component.html',
  directives:  [ RecipeListComponent ]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
