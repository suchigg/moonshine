import { trigger, state, transition, style, animate } from '@angular/animations';


export  let listItem = trigger('listItem', [

  transition('void => *', [
    style({ opacity: 0 }),
    animate(1000)
  ]),

  transition('* => void', [
    animate(2000, style({ opacity: 0 }))
  ])
]);

export  let fade = trigger('fade', [

  state('void', style({ opacity: 0 })),

  transition(':enter, :leave', [
    animate(1000)
  ])
]);

export  let tinderSwipe = trigger('tinderSwipe', [

  
  state('loveIt', style({
    transform: 'rotateZ(13deg) translateX(100%)',
    opacity: 0
  })),

  state('discardIt', style({
    transform: 'rotateZ(-13deg) translateX(-100%)',
    opacity: 0
  })),


  transition('* => *', animate('500ms ease'))
  //transition('void => loveIt, void=>discardIt', animate('500ms ease'))
]);
