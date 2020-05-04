import { Component } from '@angular/core';
import { transition, style, animate, trigger, state } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations : 
  [
    // trigger function takes a name which we will refer to in the component to animate with @ like @fade
    // takes 2 args - state and transition
    // state function removes the duplication of code like opacity - 0 for the void state and so can be replaced as shown
    // transition takes 2 args - from and to state followed by style and animate functions
    // animate = style + time and we can actually keep second argument optional because angular how to represent default
    trigger('fade',
    [
      state('void',style({opacity : 0})),
      //transition('void => *, * => void',[
      transition(':enter, :leave',[
  
       // transition can also take multiple state changes as part of 1st argument like ('void=>*,*=>void)
       // angular provides alias for void => * as :enter and * => void as :leave
       //style({backgroundColor : 'black',opacity : 0}),
       //style({opacity : 0}),
       //animate(5000,style({backgroundColor : 'white',opacity : 1}))
       animate(2000)
       //animate is duplicated in both transitions and so can be removed and made efficient with a bi-directional approach 
       //          inside the transition function
       // animate function basically returns the element to its previous state over a period of time specified
      ])
      //transition('* => void',[
      //style(),
      //animate(2000,style({opacity : 0}))
      //animate(2000)
      ])
    ]
  })
export class AppComponent {
  title = 'animation-demo';
  items = ['TRUE','CORE','HOMEBASE','KLO'];
}
