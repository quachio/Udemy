import { Ingredient } from '../shared';

export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItem(item: Ingredient) {
    this.items.push(item);
  }

  addItems(items: Ingredient[]) {
    Array.prototype.push.apply(this.items, items); // Could use a for loop to do this
  }

  editItem(oldItem: Ingredient, newItem: Ingredient) {
    // Find the position of the old item and assigning it the new Item
    this.items[this.items.indexOf(oldItem)] = newItem;
  }

  deleteItem(item: Ingredient) {
    this.items.splice(this.items.indexOf(item), 1);
  }

}
