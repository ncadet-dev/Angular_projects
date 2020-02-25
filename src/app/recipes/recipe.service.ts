import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
        new Recipe('Another Test Recipe', 'This is another simple a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb9xhlswuD7iMVPVZCGgVDIsgPiGTzCkPoms4J1EmWgILbbvDV&s'),
        new Recipe('A Third test Recipe', 'This is the third test', 'https://media.defense.gov/2011/Jul/25/2000235581/780/780/0/110725-F-WU507-005.JPG'),
        new Recipe('Fourth Recipe', 'Did you ask for rice this time?', 'https://live.staticflickr.com/5496/31479301445_cb53c0f4e9_b.jpg'),
      ];
    
      getRecipes() {
          // slice() allow to get a copy, not the proper list
          return this.recipes.slice();
      }
}