import { Component, OnInit }   from '@angular/core';
import { Recipe }              from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  moduleId:    module.id,
  selector:    'quachio-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives:  [ RecipeItemComponent ]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'https://octodex.github.com/images/privateinvestocat.jpg');

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {

  }

}
