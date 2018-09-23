import {EventEmitter, Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Udon',
      'Japanese noodle goodness',
      'https://4scoin37ye-flywheel.netdna-ssl.com/wp-content/uploads/2017/09/9F5C5056-620x465.jpg',
      [
        new Ingredient('Noodle', 1),
        new Ingredient('Soy sauce', 1),
        new Ingredient('Oden', 1)
      ]
    ),
    new Recipe(
      'Chicken',
      'My fave meat',
      'https://cdn.shopify.com/s/files/1/1090/8304/products/Desi-Chicken_grande.png?v=1450111202',
      [
        new Ingredient('Carbon', 10000),
        new Ingredient('Life', 1)
      ]
    )
  ];

  getRecipes(): Recipe[] {
    // slice() called to return a shallow copy of the array instead of reference to private array
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }
}
