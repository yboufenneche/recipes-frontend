import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';
import { EditRecipeComponent } from './recipe/edit-recipe/edit-recipe.component';
import { ListRecipesComponent } from './recipe/list-recipes/list-recipes.component';
import { AddIngredientComponent } from './ingredient/add-ingredient/add-ingredient.component';
import { EditIngredientComponent } from './ingredient/edit-ingredient/edit-ingredient.component';
import { ListIngredientsComponent } from './ingredient/list-ingredients/list-ingredients.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RecipeComponent } from './recipe/recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecipeComponent,
    EditRecipeComponent,
    ListRecipesComponent,
    AddIngredientComponent,
    EditIngredientComponent,
    ListIngredientsComponent,
    RecipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
