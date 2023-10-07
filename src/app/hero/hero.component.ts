import { Component } from '@angular/core';
import { HeroServiceService } from '../hero-service.service';

interface NewHero {
  name: string;
  superpower: string;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  showAddForm = false; 

  newHero = { name: '', superpower: '' }

  heroes = [
    {id: 1,  name: 'Spiderman', superpower: 'Trepar como una araña'},
    {id: 2,  name: 'Elastic girl', superpower: 'Elasticidad infinita'},
    {id: 3,  name: 'The Thing', superpower: 'Fuerza sobrenatural'},
    {id: 4,  name: 'Miss Tornado', superpower: 'Crear tornados'},
  ];


  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  onAdd() {
    if (this.newHero.name && this.newHero.superpower) {
      const newHero = {
        id: this.heroes.length + 1,
        name: this.newHero.name,
        superpower: this.newHero.superpower
      };
      this.heroes.push(newHero);
      this.newHero = { name: '', superpower: '' };
      this.showAddForm = false;
    }
  }
    }
  


