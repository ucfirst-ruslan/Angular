import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PlayerPageComponent} from './components/player-page/player-page.component';

const routes: Routes = [
  {path: '',   redirectTo: '/page/1', pathMatch: 'full'},
  {path: 'page/:page', component: HomePageComponent},
  {path: 'play/:artist/:song', component: PlayerPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
