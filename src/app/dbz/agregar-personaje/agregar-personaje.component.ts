import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.scss']
})
export class AgregarPersonajeComponent {
  // @Output() newCharacter: EventEmitter<Character> = new EventEmitter();
  @Input() character: Character = {
    name : '',
    power: 0
  };

  constructor(private dbzService: DbzService) {}

  addCharacter(): void {
    if (!this.character.name.trim().length) {
      return;
    }
    this.dbzService.addNewCharacter(this.character);
    this.character = {
      name: '',
      power: 0
    };
  }
}
