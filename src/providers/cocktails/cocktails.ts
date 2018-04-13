import {timeoutWith} from 'rxjs/operators/timeoutWith';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResults } from '../../models/api-results';
import { Drink } from '../../models/drink';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Rx'


/*
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
*/
/*
  Generated class for the CocktailsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CocktailsProvider {

  
  private readonly STORAGE_KEY = 'favoriteDrinks';
  private readonly API_KEY = '1';
  private readonly API_URL = `https://www.thecocktaildb.com/api/json/v1/${this.API_KEY}`;

  private favorites: Drink[];

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello CocktailsProvider Provider');
    this.favorites = [];
  }


  addToFavorites(drink: Drink): void {
    this.favorites.push(drink);
    this.saveFavorites();
  }

  removeFromFavorites(drink: Drink): Promise<void> {
    this.favorites.splice(this.favorites.indexOf(drink), 1);
    return this.saveFavorites();
  }

  random(): Observable<ApiResults> {
    return this.http.get<ApiResults>(`${this.API_URL}/random.php`).pipe(
      timeoutWith(5000, Observable.throw(new Error('Non ho potuto recuperare nessun cocktail.')))
    );
  }

  private saveFavorites(): Promise<void> {
    return this.storage.set(this.STORAGE_KEY, this.favorites); 
  }

  public loadFavorites(): Promise<Drink[]> {
    return this.storage.get(this.STORAGE_KEY).then((favorites: Drink[]) => {      
      if(favorites !== null){
        this.favorites = favorites;
      }
      return this.favorites;    
    });
  }
}
