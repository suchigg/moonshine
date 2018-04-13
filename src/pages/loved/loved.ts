import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CocktailsProvider } from '../../providers/cocktails/cocktails';
import { Drink } from '../../models/drink';
import { listItem } from '../../animations/animations';

/**
 * Generated class for the LovedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loved',
  templateUrl: 'loved.html'
})
export class LovedPage {

  favorites: Drink[];

  constructor(public navCtrl: NavController,public navParams: NavParams,private coctails: CocktailsProvider) {
    this.favorites = [];
  }

  hasFavorites(): boolean{
     if(this.favorites.length > 0){
       return true;
     }
    return false;
  }

  removeFavorite(favorite: Drink): void {    
    this.coctails.removeFromFavorites(favorite).then( () => this.loadFavorites());  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LovedPage');
    this.loadFavorites();
  }

  refreshFavorites(refresher): void {
    this.loadFavorites().then(() => refresher.complete() );
  }

  private loadFavorites(): Promise<void> {
    return this.coctails.loadFavorites().then( favorites => {
      this.favorites = favorites;
    });
  }

}
