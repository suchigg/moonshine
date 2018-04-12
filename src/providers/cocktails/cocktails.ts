import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResults } from '../../models/api-results';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the CocktailsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CocktailsProvider {

  private readonly API_KEY = '1';
  private readonly API_URL = `https://www.thecocktaildb.com/api/json/v1/${this.API_KEY}`;

  constructor(public http: HttpClient) {
    console.log('Hello CocktailsProvider Provider');
  }

  random(): Observable<ApiResults> {
    return this.http.get<ApiResults>(`${this.API_URL}/random.php`);
  }
}
