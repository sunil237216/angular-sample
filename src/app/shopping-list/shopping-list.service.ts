import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

export class ShoppinglistService{

    ingredientsadded=new EventEmitter<Ingredient[]>();

    constructor(){

    }

    ingredients:Ingredient[] =[new Ingredient('Apple',5),new Ingredient('grape',5)];
    
    ingredientadded(ingredient:Ingredient){ 
        console.log("inside shopping list",ingredient)
        this.ingredients.push(ingredient);
        this.ingredientsadded.emit(this.ingredients);
    
      }

      addtoshoppinglistService(ingredient:Ingredient[])
      {
            this.ingredients.push(...ingredient);

            this.ingredientsadded.emit(this.ingredients);


      }


      getIngredient(){

       return this.ingredients.slice();
      }





}