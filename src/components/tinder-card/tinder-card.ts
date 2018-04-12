import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Drink } from '../../models/drink';
import { fade, tinderSwipe } from '../../animations/animations';

/**
 * Generated class for the TinderCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tinder-card',
  templateUrl: 'tinder-card.html',
  animations: [
    fade,
    tinderSwipe
  ]
})
export class TinderCardComponent { // implements OnChanges

  
  private readonly RIGHT = 4;
  private readonly LEFT = 2;

  @Input() drink: Drink;

  @Output() onCoctailLoved: EventEmitter<Drink>;
  @Output() onCoctailDiscarded: EventEmitter<Drink>;

  swipeType = 'reloaded';
  
  constructor() {
    console.log('Hello TinderCardComponent Component');
    this.onCoctailLoved = new EventEmitter<Drink>();
    this.onCoctailDiscarded = new EventEmitter<Drink>();
  }

  /*
  ngOnChanges(changes: SimpleChanges): void {
    console.log("come sono eventante");
    this.swipeType = 'reloaded';
  }
  */
  
 handleDone( $event ) {
   if($event.toState === 'loveIt')
    this.onCoctailLoved.emit(this.drink);
   if($event.toState ==='discardIt')
    this.onCoctailDiscarded.emit(this.drink);
 }

  skip(drink: Drink){
    this.swipeType = 'discardIt';
    //this.onCoctailDiscarded.emit(drink);
  }

  love(drink: Drink){
    this.swipeType = 'loveIt';
    //this.onCoctailLoved.emit(drink);
  }

  swipe(event) {
    if(event.direction === this.RIGHT)
      this.love(this.drink)
    else if(event.direction === this.LEFT)
      this.skip(this.drink)   
  }
}
