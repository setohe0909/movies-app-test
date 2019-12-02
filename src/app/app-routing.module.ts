import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { TopFiveComponent } from './pages/top/top.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'top', component: TopFiveComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
