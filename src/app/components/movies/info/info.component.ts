import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../interfaces/movie';
import { HomeMovieSelected } from '../../../helper/observable/home.observable';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoMovieComponent implements OnInit {
  movie: Movie;

  constructor(private homeMovieSelected: HomeMovieSelected, private router: Router, private sanitaizer: DomSanitizer) {}

  ngOnInit() {
    this.homeMovieSelected.cast.subscribe((m) => {
      this.setMovie(m);
    });
  }

  setMovie(movie: Movie) {
    this.movie = movie;
  }

  addMovie() {
    this.router.navigate(['AddMovie']);
  }

  showImage(image) {
    return image instanceof Object ? this.sanitaizer.bypassSecurityTrustResourceUrl(image) : image;
  }
}
