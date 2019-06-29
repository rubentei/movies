import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  public myMovies: Array<Movie>;
  public authorName: string;
  public authorLastname: string;
  public added: number = 0;

  // public miPelicula: Movie = {
  //   name: 'asd',
  //   year: 3,
  //   director: 'adfds0',
  //   rating: 2
  // }


public miPelicula: Movie = {
  director: this.myMovies[0].director,
  year: this.myMovies[0].year,
  name: this.myMovies[0].name,
  rating: this.myMovies[0].rating
};
  
  constructor(private myMovieService: MoviesService, private myData: DataService) { 
    this.myMovies = myMovieService.misPeliculas;
    this.authorName = myData.name;
    this.authorLastname = myData.lastname;
  }

  ngOnInit() {
    console.log(this.miPelicula);  
  }

  // public changeName(movieName: string):void {
  //   if (this.miPelicula.name === "123"){
  //     this.miPelicula.name = 'kung fu panda'
  //   }else {
  //   this.miPelicula.name = movieName;
  // }
// }
  
  // public addOne(): void {
  //   if(this.added < (this.myMovies.length-1)){
  //     this.added++;
  //   }else {
  //     this.added = 0;
  //   }
  
    // this.miPelicula.name = this.myMovies[this.added].name;
    // this.miPelicula.director = this.myMovies[this.added].director;
    // this.miPelicula.year = this.myMovies[this.added].year;
    // this.miPelicula.rating = this.myMovies[this.added].rating;

  //   console.log(this.added);
  // }

  // public addMovie(name:string, year: number, director: string, rating: number): void{
  //   var newMovie = {
  //     director: name,
  //     year: year,
  //     name: name,
  //     rating: rating
  //   }
  //   this.added = 0;

  //   this.myMovies.push(newMovie);
  // }

  // public changeMovie(name:string, year: number, director: string, rating: number): void{
  //   this.myMovies[this.added].name = name;
  //   this.myMovies[this.added].director = director;
  //   this.myMovies[this.added].year = year;
  //   this.myMovies[this.added].rating = rating;

  //   this.miPelicula.name = name;
  //   this.miPelicula.director = director;
  //   this.miPelicula.year = year;
  //   this.miPelicula.rating = rating;
  // }
// }
}