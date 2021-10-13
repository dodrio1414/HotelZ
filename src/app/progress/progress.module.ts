import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowUpComponent } from './follow-up/follow-up.component';



@NgModule({
  declarations: [
    FollowUpComponent
  ],
  exports: [
    FollowUpComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProgressModule { }
