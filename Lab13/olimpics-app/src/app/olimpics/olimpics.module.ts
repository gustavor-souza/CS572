import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games/games.component';
import { GamesDetailComponent } from './games-detail/games-detail.component';
import { RouterModule, Routes } from '@angular/router';


const olympicRoutes: Routes = [
  {
    path: 'olimpics',
    component: GamesComponent, 
    children: [
        { path: 'row/:id', component: GamesDetailComponent }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,     
    RouterModule.forRoot(olympicRoutes)
  ],
  declarations: [GamesComponent, GamesDetailComponent]
})


export class OlimpicsModule { }
