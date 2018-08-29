import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    // Find if ingredient with the same name exists
    const index = this.ingredients.findIndex(
      (i: Ingredient) => {
        return i.name === ingredient.name;
      }
    );

    // If index returned is -1, treat as new ingredient
    // Else, add to the amount of existing ingredient
    if (index === -1) {
      this.ingredients.push(ingredient);
    } else {
      // Unary plus converts to a number (otherwise considered strings and appended)
      this.ingredients[index].amount += +ingredient.amount ;
    }

    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    for (const ingredient of ingredients) {
      const index = this.ingredients.findIndex(
        (i: Ingredient) => {
          return i.name === ingredient.name;
        }
      );
      if (index === -1) {
        this.ingredients.push(ingredient);
      } else {
        // Unary plus converts to a number (otherwise considered strings and appended)
        this.ingredients[index].amount += +ingredient.amount ;
      }
    }
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
