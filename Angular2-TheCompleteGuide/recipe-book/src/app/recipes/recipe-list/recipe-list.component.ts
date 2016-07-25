import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Recipe                                  } from '../recipe';
import { RecipeItemComponent                     } from './recipe-item.component';

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

  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitzel.jpg', []),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>(); // Custom event
  @Output() onSelect= new EventEmitter<boolean>();
  
  @Input() switch = false;
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
    this.onSelect.emit(!this.switch);
  }

}
