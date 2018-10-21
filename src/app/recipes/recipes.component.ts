import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import {  RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {


  selectedRecipe:Recipe;

  constructor(private service:RecipeService) { 

    console.log(this.selectedRecipe);
  }
  
  ngOnInit() {

    this.service.recipeSelected.subscribe((recipe:Recipe) => {

     this.selectedRecipe = recipe;
    }
   );
  }



  function(recipe:Recipe){

   console.log("inside recipe",recipe);
  }

}
