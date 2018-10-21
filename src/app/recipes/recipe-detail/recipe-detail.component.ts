import { RecipeService } from './../recipe.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppinglistService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
     
  id:number;
  recipe:Recipe;
  constructor(private slsservie:RecipeService,private routes:ActivatedRoute) { 

  }

  ngOnInit() {
    this.routes.params.subscribe((param =>
      {
     this.id = +param['id'];
     this.recipe= this.slsservie.getRecipebyId(this.id);

     console.log(this.recipe);
     console.log(this.id);

      }))
  }

  addtoshoppinglist(ingredient:Ingredient[])
  {
    this.slsservie.addingredientsToshoppingList(ingredient);
  }


}
