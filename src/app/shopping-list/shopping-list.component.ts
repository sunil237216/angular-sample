import { ShoppinglistService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[];
  constructor(private shoppingService:ShoppinglistService) { }

  ngOnInit() {
   this.shoppingService.ingredientsadded.subscribe((ingredientsnew:Ingredient[]) =>{
     
    this.ingredients = ingredientsnew;
   })
   this.ingredients= this.shoppingService.getIngredient();
  }


}
