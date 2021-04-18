import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Black panter'];
  deletedHeroe = '';

  borrarHeroe(): void {
    this.deletedHeroe = this.heroes.pop() || '';
  }
}
