import { RecipeeditComponent } from './recipeedit/recipeedit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { StartrecipeComponent } from './recipes/startrecipe/startrecipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes:Routes=[

    {path :'',redirectTo:'/recipes',pathMatch:'full'},
    {path :'recipes',component:RecipesComponent,children:[{
        path:'',component:StartrecipeComponent
    },
    {
        path:'new',component:RecipeeditComponent
    },
    {
        path:':id',component:RecipeDetailComponent
    },
  
    {
        path:':id/edit',component:RecipeeditComponent
    }]},
    {path :'shopping-list',component:ShoppingListComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]

})
export class AppRoutingModule{



}