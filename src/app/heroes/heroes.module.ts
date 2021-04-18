import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';

@NgModule({
  declarations: [
    ListadoComponent,
    HeroeComponent
  ],
  exports: [
    ListadoComponent,
    HeroeComponent
  ],
  imports: [
    // Aqui va los módulos
    CommonModule
  ]
})
export class HeroesModule{}
