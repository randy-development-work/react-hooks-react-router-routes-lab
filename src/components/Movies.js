import React from "react";
import { movies } from "../data";


function Movies() {

  const movieList = movies.map((movie) => (
    <div key={movie.title}>
      <h1>Name: {movie.title}</h1>
      <p>Time: {movie.time}</p>
      <p>Genres: </p>
      <ul>
        Genres:
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}  
      </ul>
    </div>
  ))
  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
      
    </div>);
}

export default Movies;
