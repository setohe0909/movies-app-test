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
    this.load();
  }

  // one-liner methods
  selectMovie = (movie: Movie) => this.homeMovieSelected.selectMovie(movie);

  async load() {
    this.movies = this.movieService.List();

    if (this.movies.length === 0) {
      this.movies = (await this.movieService.getTop()) as Movie[];
    } else {
      this.selectMovie(this.movies[0]);
    }
  }

  delMovie(title: any) {
    this.movieService.remove(title);
    this.load();
  }
}
