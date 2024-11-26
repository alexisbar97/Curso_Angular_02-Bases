// a-component para crear la plantilla del componente

import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false,
})

export class MainPageComponent {
  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000,
  },
  {
    name: 'Gokú',
    power: 9500,
  },
  {
    name: 'Vegeta',
    power: 7500,
  },
  ];
}
