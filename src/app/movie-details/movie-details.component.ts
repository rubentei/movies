import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie: Movie;
  
  movies: Movie[] = [];

  constructor(private myMovieService: MoviesService) { }

  ngOnInit() {
    const moviesObservable = this.myMovieService.getMovies();
    moviesObservable.subscribe((moviesData: Movie[])=> {
      this.movies = moviesData;
    });
  }

}
