import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { movieData } from '../movieData';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  selected: Boolean = false;
  selectedMovie: Movie | null = null;

  constructor( public movieservice: MovieService) {

  }

  ngOnInit() {
    this.movieservice.getMovies().subscribe(data => {
      this.movies = data;
    });
  }

  onSelect(movie: Movie) {
    this.selectedMovie = movie;
    this.selected = true;
  }

  getCantidadActoresPerMovie(){
    return this.movieservice.getMovies().subscribe(data => {
      this.movies = data;
      return this.movies.length;
    });
  }

}
