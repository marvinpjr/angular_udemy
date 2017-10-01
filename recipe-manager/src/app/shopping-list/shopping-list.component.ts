import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../model/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  ingredients: Ingredient[] = [
    new Ingredient("Black Beans", 2),
    new Ingredient("Red Kidney Beans", 3),
    new Ingredient("Corn", 1)
  ];

  constructor() { }

  ngOnInit() {
  }

}
