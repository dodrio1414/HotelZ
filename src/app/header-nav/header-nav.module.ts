import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  
  exports: [
    NavBarComponent
  ],

  imports: [
    CommonModule,
    FooterModule,
    
  ],
})
export class HeaderNavModule { }
