import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ObtainedMovie } from '../obtained-movie';


@Component({
  selector: 'app-moviesearch',
  templateUrl: './moviesearch.component.html',
  styleUrls: ['./moviesearch.component.scss']
})
export class MoviesearchComponent implements OnInit {
 
  public movieResult: Array<ObtainedMovie> = [];
  

  @Input() moviePicture: string;

  public url:string = 'https://image.tmdb.org/t/p/w500/';
  
  constructor(private myMovieService: MoviesService) { }

  ngOnInit() {
  }

  public getMovie(title) {
    this.myMovieService.obtainMovieApi(title).subscribe({
    next: (movie) => {
      
      this.movieResult = movie.results;
    }
  });
};
}
