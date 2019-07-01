import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MoviesearchComponent } from './moviesearch/moviesearch.component';

const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: '', component: WelcomeComponent},
  { path: 'search', component: MoviesearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
