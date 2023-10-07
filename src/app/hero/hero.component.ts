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

  constructor(private heroService: HeroServiceService) {}

  showAddForm = false; 

  selectedHero: any = null;

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
    this.heroService.addHero(this.heroes, this.newHero);
    this.newHero = { name: '', superpower: '' };
    this.showAddForm = false;
  }
  
  onSelect(hero: any) {
    this.selectedHero = { ...hero };

}
onEdit() {
  if (this.selectedHero.name && this.selectedHero.superpower) {
    this.heroService.editHero(this.heroes, this.selectedHero);
    this.selectedHero = null;
  }
}

onDelete(hero: any) {
  const isConfirmed = window.confirm(`¿Estás seguro de que deseas borrar a ${hero.name}?`);
  if (isConfirmed) {
    this.heroService.deleteHero(this.heroes, hero);
  }
}


}
