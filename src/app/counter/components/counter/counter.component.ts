// a- para usar Angular Snippets

import { Component } from "@angular/core";              //

@Component({                                            //
  selector: 'app-counter',                              //
  template: `                                           <!--  -->
  <h3>Counter: {{counter}}</h3>                         <!--  -->
  <button (click)="increaseBy(1)">+1</button>           <!--  -->
  <button (click)="reset()">Reset</button>              <!--  -->
  <button (click)="increaseBy(-1)">-1</button>          <!--  -->
  `,
  standalone: false,                                    //
})

export class CounterComponent {                         //
  public title: string = '¡Hola Mundo!';                //
  public counter: number = 10;                          //

  increaseBy(value: number): void {                     //
    this.counter += value;                              // Equivalente a 'this.counter = this.counter + value;'
  }

  reset(): void {                                       //
    this.counter = 10;                                  //
  }
}
