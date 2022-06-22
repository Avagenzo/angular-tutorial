import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test description', 'https://www.cookipedia.co.uk/wiki/images/b/be/Gluten_free_sausage_cassoulet_recipe.jpg' ),
    new Recipe('A Test Recipe', 'This is a test description', 'https://www.cookipedia.co.uk/wiki/images/b/be/Gluten_free_sausage_cassoulet_recipe.jpg' )
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
