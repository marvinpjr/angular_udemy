import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Taco Soup', 'Daddys favorite', 'https://cdn2.tmbi.com/TOH/Images/Photos/37/1200x1200/exps8202_PR15D03_03_2b.jpg'),
    new Recipe('Chicken Soup', 'Also good', 'https://i0.wp.com/dishesanddustbunnies.com/wp-content/uploads/2015/03/image23.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
