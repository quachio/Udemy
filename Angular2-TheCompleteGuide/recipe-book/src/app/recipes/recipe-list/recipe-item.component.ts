import { Component, OnInit, Input } from '@angular/core';
import { Recipe }            from '../recipe';

@Component({
  moduleId:    module.id,
  selector:    'quachio-recipe-item',
  templateUrl: 'recipe-item.component.html',
})
export class RecipeItemComponent implements OnInit {
  @Input() // set recipe from the RecipeListComponent
  recipe: Recipe;

  recipeId: number;

  constructor() { }

  ngOnInit() {
  }

}
