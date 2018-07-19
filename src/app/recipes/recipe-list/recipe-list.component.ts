import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Udon', 'Japanese noodle goodness', 'https://4scoin37ye-flywheel.netdna-ssl.com/wp-content/uploads/2017/09/9F5C5056-620x465.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
