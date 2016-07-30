import { Component, OnInit, Input } from '@angular/core';
import { Recipe }                   from '../recipe';
import { ShoppingListService }      from '../../shopping-list';

@Component({
  moduleId:    module.id,
  selector:    'quachio-recipe-detail',
  templateUrl: 'recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe; // Allow other component to pass data here

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

}
