import { Component, ElementRef, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  onAddItem() {
    const name: string = this.nameRef.nativeElement.value;
    const amount: number = +this.amount.nativeElement.value;
    this.shoppingListService.addIngredient(new Ingredient(name, amount));
  }

}
