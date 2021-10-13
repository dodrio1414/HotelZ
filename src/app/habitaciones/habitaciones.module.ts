import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms/rooms.component';



@NgModule({
  declarations: [
    RoomsComponent
  ],
  exports: [
    RoomsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HabitacionesModule { }
