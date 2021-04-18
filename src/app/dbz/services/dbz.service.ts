import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable()
export class DbzService {
  // tslint:disable-next-line:variable-name
  private _characters: Character[] = [];

  constructor() {
    console.log('Servicio inicializado');
  }

  get characters(): Character[] {
    return this._characters;
  }

  addNewCharacter(character: Character): void {
    this._characters.push(character);
  }


}
