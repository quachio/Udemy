import { Injectable } from '@angular/core';

import { Recipe     } from './recipe';
import { Ingredient } from '../shared';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'https://eat24-files-live.s3.amazonaws.com/cuisines/v4/healthy-foods.jpg?Signature=ffVh5d2Qtt3qIOiiQgnh3kS3xoM%3D&Expires=1469838452&AWSAccessKeyId=AKIAIEJ2GCCJRT63TBYA', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ])
  ];

  constructor() {}

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1)
  }

}
