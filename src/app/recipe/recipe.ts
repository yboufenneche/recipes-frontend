import { Ingredient } from '../ingredient/ingredient';

export class Recipe {
    _id        : Number;
    name       : String;
    type       : String;
    description: String;
    imageUrl   : String;
    createdAt  : String;
    ingredients: Array<Ingredient>

    constructor( name: String, type: String, description: String, imageUrl: String, createdAt:String, ingredients: Array<Ingredient>){
        //this._id         = id;
        this.name        = name;
        this.type        = type;
        this.description = description;
        this.imageUrl    = imageUrl;
        this.createdAt   = createdAt;
        this.ingredients = ingredients;
    }

}
