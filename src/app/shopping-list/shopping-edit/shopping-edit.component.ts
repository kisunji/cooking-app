import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newItem = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    this.newItem.emit(new Ingredient(this.nameRef.nativeElement.value, this.amount.nativeElement.value));
  }

}
