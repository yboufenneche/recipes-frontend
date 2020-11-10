import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../../shared/rest-api.service";
//import { Recipe } from '../recipe';
import { DataRecipe } from '../data-recipe';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {

  recipes: any = [];
  //Ingredients: any =[];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadRecipes();
  }

  // retrieve the list of ingredients from database
  loadRecipes () {
    /* this.restApi.getRecipes().subscribe((data: {}) => {
      this.Recipes = data;
    }) */
    this.recipes = DataRecipe.recipes;
  }

  // delete a recipe
  deleteRecipe(id) {
    if (window.confirm('Etes-vous sûr de vouloir supprimer cette recette ?')){
      this.restApi.deleteStudent(id).subscribe(data => {
        this.loadRecipes();
      })
    }
  }
  
}
