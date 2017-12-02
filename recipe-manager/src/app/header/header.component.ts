import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationChoice } from '../model/navigation.enum'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onNavChange: EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  recipes_OnClick(){
    this.onNavChange.emit(NavigationChoice.RecipeBook);
  }

  shoppingList_OnClick(){
    this.onNavChange.emit(NavigationChoice.ShoppingList);
  }

}
