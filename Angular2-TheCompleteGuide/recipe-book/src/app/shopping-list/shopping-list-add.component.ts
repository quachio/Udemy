import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Ingredient                          } from "../shared/ingredient";
import { ShoppingListService                 } from "./shopping-list.service";

@Component({
  moduleId:    module.id,
  selector:    'quachio-shopping-list-add',
  templateUrl: 'shopping-list-add.component.html',
})
export class ShoppingListAddComponent implements OnChanges {
  @Input() item: Ingredient; // This property will be set outside of this component, some other component will pass to it
  @Output() cleared = new EventEmitter();
  isAdd = true; // If I get an item outside of this component, isAdd nee

  constructor(private sls: ShoppingListService) {
  }

  ngOnChanges(changes) { // While be fire when @Input changes
    console.log('ngOnChanges');
    if (changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = {name: null, amount: null};
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient ) {
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
    if (!this.isAdd) {
      // Edit Mode
      this.sls.editItem(this.item, newIngredient)
      this.onClear();
    } else {
      // Add Mode
      this.item = newIngredient;
      this.sls.addItem(this.item);
    }
  }

  onDelete() {
    this.sls.deleteItem(this.item);
    this.onClear();
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }

}
