import { Component } from '@angular/core';
import { NavigationChoice } from 'app/model/navigation.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showRecipeBook: boolean = false;
  public showShoppingList: boolean = true;


  setChosenComponent(componentName: NavigationChoice){
    if (componentName == NavigationChoice.RecipeBook) {
      this.showRecipeBook = true;
      this.showShoppingList = false;
    } else if (componentName == NavigationChoice.ShoppingList){
      this.showShoppingList = true;
      this.showRecipeBook = false;
    }
  }
}
