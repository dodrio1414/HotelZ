import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room/room.component';



@NgModule({
  declarations: [
    RoomComponent,
  ],
  exports: [
    RoomComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HabitacionModule { }
