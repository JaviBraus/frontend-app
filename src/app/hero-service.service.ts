import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  constructor() { }

  addHero(heroes: any[], newHero: any) {
    if (newHero.name && newHero.superpower) {
      const hero = {
        id: heroes.length + 1,
        name: newHero.name,
        superpower: newHero.superpower,
      };
      heroes.push(hero);
    }
  }

  editHero(heroes: any[], editedHero: any) {
    const index = heroes.findIndex(hero => hero.id === editedHero.id);
    if (index !== -1) {
      heroes[index] = { ...editedHero };
    }
  }

  deleteHero(heroes: any[], heroToDelete: any) {
    const index = heroes.findIndex(hero => hero.id === heroToDelete.id);
    if (index !== -1) {
      heroes.splice(index, 1); // Elimina el héroe del arreglo
    }
  }


}
