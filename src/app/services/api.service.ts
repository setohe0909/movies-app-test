import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';

import { LocalStorageUtils } from '../helper/localStorage-utils';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  movies: any;

  constructor(private http: HttpClient) {
    this.movies = this.getAll();
  }

  // one-liner methods
  getByName = (title: string) => this.movies.find((m: any) => m.title.toUpperCase() === title.toUpperCase()) || {};

  getAll = (): Movie[] => {
    let movies: Movie[] = LocalStorageUtils.getstorage('movies');
    if (movies === null) {
      movies = [];
    }
    return movies;
  };

  save = (movie: Movie) => {
    this.indexMovie(movie);

    LocalStorageUtils.setStorage('movies', JSON.stringify(this.movies));
  };

  indexMovie = (movie: any) => {
    const indx = this.movies.findIndex((m: any) => m.title.toUpperCase() === movie.title.toUpperCase());

    if (indx > -1) {
      this.movies[indx] = movie;
    } else {
      this.movies.push(movie);
    }
  };

  getTop = async () => {
    const objTop = await this.http.get('http://www.mocky.io/v2/5dc3c053300000540034757b').toPromise();

    return Object.values(objTop)[0];
  };

  remove = (title: string) => {
    const movies: Movie[] = this.getAll();
    const delIndx = movies.findIndex((m) => m.title === title);

    if (delIndx >= 0) {
      movies.splice(delIndx, 1);
    }

    LocalStorageUtils.setStorage('movies', movies);
  };

  List = () => {
    const movies: Movie[] = this.getAll();
    return movies;
  };
}
