import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from '../recipe/recipe';
import { Ingredient } from '../ingredient/ingredient';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  /* 
   *******  CRUD methods to deal with recipes
  */

  // get all recipes
  getRecipes() {
    return this.http.get<Recipe>(this.apiURL + '/recipes/all')
  }

  // get one recipe
  getRecipe(id) {
    return this.http.get<Recipe>(this.apiURL + '/recipes/' + id)
  }

  // add (create) a recipe
  createStudent(recipe) {
    return this.http.post<Recipe>(this.apiURL + '/recipes/add', JSON.stringify(recipe), this.httpOptions)
  }

  // edit a recipe
  updateStudent(id, recipe) {
    return this.http.patch<Recipe>(this.apiURL + '/recipes/update/' + id, JSON.stringify(recipe), this.httpOptions)
  }

  // delete a recipe
  deleteStudent(id){
    return this.http.delete<Recipe>(this.apiURL + '/recipes/delete/' + id, this.httpOptions)
  }

  /* 
   *******  CRUD methods to deal with ingredients
  */

 // get all ingredients
 getIngredients() {
  return this.http.get<Ingredient>(this.apiURL + '/ingredients/all')
}

// get one ingredient
getIngredient(id) {
  return this.http.get<Recipe>(this.apiURL + '/ingredients/' + id)
}

// add (create) an ingredient
createIngredient(ingredient) {
  return this.http.post<Recipe>(this.apiURL + '/ingredients/add', JSON.stringify(ingredient), this.httpOptions)
}

// edit an ingredient
updateIngredient(id, ingredient) {
  return this.http.patch<Recipe>(this.apiURL + '/ingredients/update/' + id, JSON.stringify(ingredient), this.httpOptions)
}

// delete an ingredient
deleteIngredient(id){
  return this.http.delete<Recipe>(this.apiURL + '/ingredients/delete/' + id, this.httpOptions)
}

}
