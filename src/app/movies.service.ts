import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  public misPeliculas: Array<Movie> = [
    {
      director: 'Tarantino',
      year: 1989,
      name: 'Kill Bill',
      rating: 5
    },
    {
      director: 'Frank Darabont',
      year: 1994,
      name: 'Cadena Perpetua',
      rating: 4
    },
    {
      director: 'Francis Ford Coppola',
      year: 1972,
      name: 'El Padrino',
      rating: 3
    },
    {
      director: 'Chris Nolan',
      year: 2008,
      name: 'El caballero oscuro',
      rating: 5
    }
  ]
  static addMovie: any;

  constructor(private http: HttpClient) { }

  public getMovies(): any {
    const moviesObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.misPeliculas);
      }, 1000);
    });

    return moviesObservable;
  }

  public addMovie(newMovie: Movie): void {
    this.misPeliculas.push(newMovie);
  }

  public obtainMovieApi(movieTitle: string): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=b1b4e837cbaa37f67bb672147a036040&language=es-ES&query=' + movieTitle
   
  )};
};