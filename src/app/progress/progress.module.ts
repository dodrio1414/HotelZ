import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowUpComponent } from './follow-up/follow-up.component';
import { InputprogressComponent } from './inputprogress/inputprogress.component';
import { ListprogressComponent } from './listprogress/listprogress.component';



@NgModule({
  declarations: [
    FollowUpComponent,
    InputprogressComponent,
    ListprogressComponent
  ],
  exports: [
    FollowUpComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProgressModule { }
