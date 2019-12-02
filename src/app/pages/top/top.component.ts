import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-top-five',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopFiveComponent implements OnInit {
  movies: Movie[];
  constructor(private movieService: ApiService) {}

  ngOnInit() {
    this.getTopFive();
  }

  async getTopFive() {
    this.movies = await this.movieService.getTop();
  }
}
