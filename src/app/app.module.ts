import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HabitacionModule } from './habitacion/habitacion.module';
import { HeaderNavModule } from './header-nav/header-nav.module';
import { ProgressModule } from './progress/progress.module';
import { HabitacionesModule } from './habitaciones/habitaciones.module';
import { PerfilModule } from './perfil/perfil.module';
import { PortadaModule } from './portada/portada.module';
import { RestauranteModule } from './restaurante/restaurante.module';
import { FooterModule } from './footer/footer.module';
import { WebpageModule } from './webpage/webpage.module';



@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderNavModule,
    ProgressModule,
    HabitacionModule,
    HabitacionesModule,
    PerfilModule,
    RestauranteModule,
    PortadaModule,
    FooterModule,
    WebpageModule,
    AppRoutingModule,
    
    



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
