import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../../../interfaces/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;
  @Output() delMovie = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
}
