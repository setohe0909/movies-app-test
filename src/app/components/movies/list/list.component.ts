import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../services/api.service';
import { Movie } from '../../../interfaces/movie';
import { HomeMovieSelected } from '../../../helper/observable/home.observable';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListMoviesComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService: ApiService, private homeMovieSelected: HomeMovieSelected) {}

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies() {
    this.movies = this.movieService.List();
    if (this.movies.length === 0) {
      const mar = (await this.movieService.getTop()) as Movie[];
      this.movies = mar;
      console.log('movies', this.movies);
    }
    this.setFirstMovie();
  }

  setFirstMovie() {
    if (this.movies.length > 0) {
      this.selectMovie(this.movies[0]);
    }
  }

  selectMovie(movie: Movie) {
    this.homeMovieSelected.selectMovie(movie);
  }

  delMovie(title) {
    this.movieService.remove(title);
    this.loadMovies();
  }
}
