import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private slService: ShoppingListService,
              private rcpService: RecipeService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        this.id = +params.get('id');
        this.recipe = this.rcpService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.slService.addIngredients(this.recipe.ingredients);
  }

}
