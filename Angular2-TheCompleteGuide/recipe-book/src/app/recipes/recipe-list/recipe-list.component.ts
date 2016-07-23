import {
  Component,
  OnInit,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  Recipe
} from '../recipe';
import {
  RecipeItemComponent
 } from './recipe-item.component';

@Component({
  moduleId:    module.id,
  selector:    'quachio-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives:  [ RecipeItemComponent ]
})
/**
 * RecipesComponent
 */
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>(); // Custom event
  recipe = new Recipe('Dummy', 'Dummy', 'https://octodex.github.com/images/privateinvestocat.jpg');

  /**
   * [constructor description]
   * @return {[type]} [description]
   */
  constructor() { }

  /**
   * [ngOnInit description]
   * @return {[type]} [description]
   */
  ngOnInit() {
  }

  /**
   * [onSelected description]
   * @param  {Recipe} recipe [description]
   * @return {[type]}        [description]
   */
  onSelected(recipe: Recipe) {
    console.log('onSelected');
    this.recipeSelected.emit(recipe); // -> $event
  }

}
