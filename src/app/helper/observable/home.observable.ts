import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../../interfaces/movie';

@Injectable()
export class HomeMovieSelected {
  private bc = new BehaviorSubject<Movie>(null);
  cast = this.bc.asObservable();

  constructor() {}

  selectMovie(movie: Movie): void {
    this.bc.next(movie);
  }
}
