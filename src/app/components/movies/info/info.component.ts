import { Component, OnInit } from '@angular/core';

import { Movie } from '../../../interfaces/movie';
import { HomeMovieSelected } from '../../../helper/observable/home.observable';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoMovieComponent implements OnInit {
  movie: Movie;

  constructor(private homeMovieSelected: HomeMovieSelected, private sanitaizer: DomSanitizer) {}

  ngOnInit() {
    this.homeMovieSelected.cast.subscribe((m) => this.setMovie(m));
  }

  // one-liner methods
  setMovie = (movie: Movie) => (this.movie = movie);
  showImage = (image: any) => (image instanceof Object ? this.sanitaizer.bypassSecurityTrustResourceUrl(image) : image);
}
