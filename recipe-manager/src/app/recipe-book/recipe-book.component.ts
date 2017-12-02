import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model'

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  public currentlySelectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(selectedRecipe: Recipe){
    this.currentlySelectedRecipe = selectedRecipe;
  }
}
