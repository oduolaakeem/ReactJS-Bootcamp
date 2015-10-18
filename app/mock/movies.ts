import {IMovieInterface} from '../models/Movie.d.ts';

export default function getAll():Array<IMovieInterface> {
  return [
      {title: "Monopoly", description: "A board game movie", year: "2000", cover: "fake1.jpg", rating: 0},
      {title: "The Dork Knight", description: "", year: "2001", cover: "fake2.jpg", rating: 1},
      {title: "Chutes and Ladders", description: "", year: "2010", cover: "fake3.jpg", rating: 1.5},
      {title: "Hungry Hippos", description: "", year: "1994", cover: "fake4.jpg", rating: 2},
      {title: "Enemy at the Gates", description: "", year: "2003", cover: "fake5.jpg", rating: 2.5},
      {title: "Harry Potter", description: "", year: "1989", cover: "fake6.jpg", rating: 3},
      {title: "Sherlock Homes", description: "", year: "2007", cover: "fake7.jpg", rating: 3.5},
      {title: "Leg Stuck", description: "", year: "1990", cover: "fake8.jpg", rating: 4},
      {title: "Lord of the Bling", description: "", year: "1995", cover: "fake9.jpg", rating: 4.5},
      {title: "Titanic", description: "Starring Leonardo DiCaprio, Kate Winslet, Bill Paxton, Billy Zane | based on a screenplay by director James Cameron, whose fictional love story is intertwined with a chronicle of the April 1912 Titanic sinking", year: "2015", cover: "fake10.jpg", rating: 5}
  ]
}
