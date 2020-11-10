import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';
import { AddRecipeComponent }       from './recipe/add-recipe/add-recipe.component';
import { EditRecipeComponent }      from './recipe/edit-recipe/edit-recipe.component';
import { ListRecipesComponent }     from './recipe/list-recipes/list-recipes.component';
import { RecipeComponent }          from './recipe/recipe/recipe.component';

import { AddIngredientComponent }   from './ingredient/add-ingredient/add-ingredient.component';
import { EditIngredientComponent }  from './ingredient/edit-ingredient/edit-ingredient.component';
import { ListIngredientsComponent } from './ingredient/list-ingredients/list-ingredients.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '' },
    { path: 'add-recipe', component: AddRecipeComponent },
    { path: 'edit-recipe/:id', component: EditRecipeComponent },
    { path: 'list-recipes', component: ListRecipesComponent },
    { path: 'recipe', component: RecipeComponent },

    { path: 'add-ingredient', component: AddIngredientComponent },
    { path: 'edit-ingredient/:id', component: EditIngredientComponent },
    { path: 'list-ingredients', component: ListIngredientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }