import { Component, OnInit } from '@angular/core';
import { Imovie } from '../../modules/movie';
import { movieArray } from '../../constants/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  baselink:string="https://image.tmdb.org/t/p/w500/"
  movieData:Array<Imovie>=movieArray
  constructor() { }

  ngOnInit(): void {
  }

}
