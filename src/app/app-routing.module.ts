import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './webpage/inicio/inicio.component';
import { NavBarComponent } from './header-nav/nav-bar/nav-bar.component';
import { FooterContentComponent } from './footer/footer-content/footer-content.component';
import { ProgressModule } from './progress/progress.module';
import { FollowUpComponent } from './progress/follow-up/follow-up.component';
import { RoomComponent } from './habitacion/room/room.component';
import { RoomsComponent } from './habitaciones/rooms/rooms.component';
import { ProfileComponent } from './perfil/profile/profile.component';
import { RestaurantComponent } from './restaurante/restaurant/restaurant.component';
import { FaceComponent } from './portada/face/face.component';

const routes: Routes = [
  {
    path: '',
    component: FaceComponent,
    pathMatch: 'full'

  },
  // {
  //   path: 'navsito',
  //   component: NavBarComponent,
  //   pathMatch: 'full'

  // },
  {
    path: 'Follow-up',
    component: FollowUpComponent,
    pathMatch: 'full'

  },

  {
    path: 'room',
    component: RoomComponent,
    pathMatch: 'full'

  },
  {
    path: 'rooms',
    component: RoomsComponent,
    pathMatch: 'full'

  },

  {
    path: 'profile',
    component: ProfileComponent,
    pathMatch: 'full'

  },
  
  {
    path: 'restaurant',
    component: RestaurantComponent,
    pathMatch: 'full'

  },
  {
    path: 'food',
    component: RestaurantComponent,
    pathMatch: 'full'

  },
  {
      path:'**',
      redirectTo: ""
  }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
