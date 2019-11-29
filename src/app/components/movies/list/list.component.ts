import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../interfaces/movie';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListMoviesComponent implements OnInit {
  movies: Movie[];

  constructor() {}

  ngOnInit() {}
}
