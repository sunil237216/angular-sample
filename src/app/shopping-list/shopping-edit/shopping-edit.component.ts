import { ShoppinglistService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

@ViewChild('inputName') nameInputRef: ElementRef;
@ViewChild('inputAmount') amountInputRef: ElementRef;

//@Output() Ingredientadded= new EventEmitter<Ingredient>();
  constructor(private shoppinglistService:ShoppinglistService) { }

  ngOnInit() {
  
  }

  addItem(){

    const name =this.nameInputRef.nativeElement.value;
    const amount= this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(name,amount);
    this.shoppinglistService.ingredientadded(newIngredient);
    console.log(newIngredient);
   // this.Ingredientadded.emit(newIngredient);
  }



}
