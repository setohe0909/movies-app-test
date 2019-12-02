import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../../../interfaces/movie';
import { HomeMovieSelected } from '../../../helper/observable/home.observable';

@Component({
  selector: 'app-movie-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;
  @Output() delMovie = new EventEmitter<string>();
  constructor(private homeMovieSelected: HomeMovieSelected) {}

  ngOnInit() {}

  delete() {
    this.delMovie.emit(this.movie.title);
  }

  selectMovie(movie: Movie) {
    this.homeMovieSelected.selectMovie(movie);
  }
}
