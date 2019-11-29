import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../interfaces/movie';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoMovieComponent implements OnInit {
  movie: Movie;

  constructor() {}

  ngOnInit() {}
}
