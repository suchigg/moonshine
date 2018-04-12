import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CocktailsProvider } from '../../providers/cocktails/cocktails';
import { Drink } from '../../models/drink';
import { ApiResults } from '../../models/api-results';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  actualDrink: Drink;
  loaded: boolean;
  
  constructor(public navCtrl: NavController, private cocktails: CocktailsProvider) {
    this.getRandomCocktail();
  }

  coctailWasLoved(drink: Drink): void {
    console.log("coctailWasLoved");
    // save coctails on prefered
    this.getRandomCocktail();
  }

  coctailWasDiscarded(drink: Drink): void {
    console.log("coctailWasDiscarded");
    this.getRandomCocktail();
  }

  private getRandomCocktail(): void {
    this.loaded = false;
    this.cocktails.random().subscribe(
      (data: ApiResults) => {
        if(data.drinks && data.drinks.length > 0){
          this.actualDrink = data.drinks[0];
          this.loaded = true;
        }
      });
  }

}
