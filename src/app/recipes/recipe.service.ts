import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes : Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test description', 'https://www.cookipedia.co.uk/wiki/images/b/be/Gluten_free_sausage_cassoulet_recipe.jpg', 
        [new Ingredient('Meat', 1),
         new Ingredient('Fries', 200)]),
        new Recipe('A Test Recipe 2', 'This is another description', 'https://www.cookipedia.co.uk/wiki/images/b/be/Gluten_free_sausage_cassoulet_recipe.jpg', 
        [new Ingredient('Salad', 4),
        new Ingredient('Ketchup', 2)])
      ];

      constructor(private slService: ShoppingListService){

      }

      getRecipes() {
        return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}
