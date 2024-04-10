import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegisterComponent } from './componentes/register/register.component';
import { authGuard } from './guardias/auth.guard';
import { PlayersComponent } from './componentes/players/players.component'
import { TeamsComponent } from './componentes/teams/teams.component';
import { MatchesComponent } from './componentes/matches/matches.component';
import { NewsComponent } from './componentes/news/news.component';
import { RegisterplayerComponent } from './componentes/registerplayer/registerplayer.component';
import { AdminComponent } from './componentes/admin/admin.component';
const routes: Routes = [
  {
  path: 'login',
  component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'players',
    component: PlayersComponent,
    canActivate: [authGuard]
  },
  {
    path: 'teams',
    component: TeamsComponent,
    
  },
  {
    path: 'matches',
    component: MatchesComponent,
    
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'registerplayers',
    component: RegisterplayerComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }