import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { directors } from "../data";

function Directors() {
  const directorsList = directors.map((director) => (
    <div><h2>{director.name}</h2>
      <p>Movies: </p>
      <ul>
      {director.movies.map((movie) => (
        <li>{movie}</li>
      ))}
      </ul>
    </div>
  ))
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  );
    
}

export default Directors;
