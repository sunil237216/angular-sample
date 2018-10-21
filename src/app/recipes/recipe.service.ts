import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "../../../node_modules/@angular/core";
import { ShoppinglistService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    
    recipeSelected =new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',[new Ingredient("potato",100),new Ingredient("chilli",100)]),
        new Recipe('A Test Recipe', 'This is simply a test', 'http://www.ndtv.com/cooks/images/kerala.chicken.roast%20%281%29.jpg',[new Ingredient("chicken",100)])
      ];

      constructor(private slservice:ShoppinglistService)
      {

      }

      getRecipe(){

      return this.recipes.slice();
      }
      addingredientsToshoppingList(ingredient:Ingredient[]){

        this.slservice.addtoshoppinglistService(ingredient);
      } 

      getRecipebyId(index:number)
      {

        console.log("insde get recipe id");

        return this.recipes.slice()[index];
      }

}