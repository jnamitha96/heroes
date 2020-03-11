import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Wonder woman' },
      { id: 12, name: 'spiderman' },
      { id: 13, name: 'batman' },
      { id: 14, name: 'superman' },
      { id: 15, name: 'capt' },
      { id: 16, name: 'black panther' },
      { id: 17, name: 'aquaman' },
      { id: 18, name: 'antman' },
      { id: 19, name: 'thor' },
      { id: 20, name: 'dr strange' },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}