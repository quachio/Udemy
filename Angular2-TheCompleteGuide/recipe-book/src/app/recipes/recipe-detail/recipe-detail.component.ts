import { Component, OnInit, Input, OnDestroy       } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from "@angular/router";

import { Recipe                                    } from '../recipe';
import { ShoppingListService                       } from '../../shopping-list';
import { Subscription                              } from "rxjs/Rx";
import { RecipeService                             } from "../recipe.service";

@Component({
  moduleId:    module.id,
  selector:    'quachio-recipe-detail',
  templateUrl: 'recipe-detail.component.html',
  directives:  [ ROUTER_DIRECTIVES] ,
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  selectedRecipe:       Recipe;
  private recipeIndex:  number = 1;
  private subscription: Subscription;

  constructor
  (
    private sls:           ShoppingListService,
    private router:        Router,
    private route:         ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
      }
    );
    console.log('ngOnInit');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('ngOnDestroy');
  }

  onAddToShoppingList() {
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit'])
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

}
