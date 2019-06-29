import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  
  private myMovies: Array<Movie>;
  

  constructor(private myMovieService: MoviesService) {
    // this.myMovies = myMovieService.misPeliculas;
   }

  ngOnInit() {
    

  }

  public showMovies():void {
   
  }
}
