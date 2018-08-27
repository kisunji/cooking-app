import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Udon',
      'Japanese noodle goodness',
      'https://4scoin37ye-flywheel.netdna-ssl.com/wp-content/uploads/2017/09/9F5C5056-620x465.jpg'
    ),
    new Recipe(
      'Chicken',
      'My fave meat',
      'https://cdn.shopify.com/s/files/1/1090/8304/products/Desi-Chicken_grande.png?v=1450111202'
    )
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(r: Recipe) {
    this.recipeWasSelected.emit(r);
  }

}
