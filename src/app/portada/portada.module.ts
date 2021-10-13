import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceComponent } from './face/face.component';



@NgModule({
  declarations: [
    FaceComponent
  ],
  exports: [
    FaceComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PortadaModule { }
