import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Common modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { HomeMovieSelected } from './helper/observable/home.observable';
import { ApiService } from './services/api.service';
import {
  MatGridListModule,
  MatCardModule,
  MatInputModule,
  MatNativeDateModule,
  MatDatepickerModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

// Components
import { ListMoviesComponent } from './components/movies/list/list.component';
import { InfoMovieComponent } from './components/movies/info/info.component';
import { MovieItemComponent } from './components/movies/item/item.component';

// Contianer Components
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { TopFiveComponent } from './pages/top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    MovieComponent,
    TopFiveComponent,

    ListMoviesComponent,
    InfoMovieComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [HomeMovieSelected, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
