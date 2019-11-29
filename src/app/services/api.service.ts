import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { LocalStorageUtils } from '../helper/localStorage-utils';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAll = (): Movie[] => {
    let movies: Movie[] = LocalStorageUtils.getstorage('movies');
    if (movies === null) {
      movies = [];
    }
    return movies;
  };

  getByName = (title: string) => {
    const movies: Movie[] = this.getAll();
    return movies.find((m) => m.title.toUpperCase() === title.toUpperCase()) || {};
  };

  save = (movie: Movie) => {
    const movies: Movie[] = this.getAll();
    const indx = movies.findIndex((m) => m.title.toUpperCase() === movie.title.toUpperCase());
    if (indx > -1) {
      movies[indx] = movie;
    } else {
      movies.push(movie);
    }
    LocalStorageUtils.setStorage('movies', movies);
  };

  List = () => {
    const movies: Movie[] = this.getAll();
    return movies;
  };

  getTop = async () => {
    const objTop = await this.http
      .get('http://www.mocky.io/v2/5dc3c053300000540034757b')
      .pipe(timeout(4000))
      .toPromise();

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
}
