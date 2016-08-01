//import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Component, OnInit   } from '@angular/core';
import { ROUTER_DIRECTIVES   } from "@angular/router";
import { Recipe              } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';
import { RecipeService       } from '../recipe.service';

@Component({
  moduleId:    module.id,
  selector:    'quachio-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives:  [ RecipeItemComponent, ROUTER_DIRECTIVES ]
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  //@Output() recipeSelected = new EventEmitter<Recipe>(); // Custom event, listen and emmit

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  /*
  onSelected(recipe: Recipe) {
    console.log('onSelected');
    this.recipeSelected.emit(recipe); // -> $event
  }
  */

}
