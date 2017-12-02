import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'app/model/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  @Output() recipeItemClicked: EventEmitter<Recipe> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.recipeItemClicked.emit(this.recipeItem);
  }
}
