import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  get characters(): Character[] {
    return this.dbzService.characters;
  }

  constructor(private dbzService: DbzService) {}
}
