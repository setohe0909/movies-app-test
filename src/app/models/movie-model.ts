import { Movie } from '../interfaces/movie';

export class MovieModel implements Movie {
  description: string;
  image: string;
  release: Date;
  title: string;
}
