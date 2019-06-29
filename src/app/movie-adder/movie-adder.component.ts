import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-adder',
  templateUrl: './movie-adder.component.html',
  styleUrls: ['./movie-adder.component.scss']
})
export class MovieAdderComponent implements OnInit {
  
  constructor(public moviesService: MoviesService) { }

  ngOnInit() {
  }

  public getMovieToAdd(name: string, year: number, director: string): void {
    var newMovie: Movie = {
      director: director,
      year: year,
      name: name,
      rating: 0
    }
    
    this.moviesService.addMovie(newMovie);
  }  
}
