import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { actors } from "../data";

function Actors() {
  // const moviesList = actors.map((mov) => (
  //   <li>{mov.movies}</li>
  // ))
  const actorsList = actors.map((actor) => {
    return <div>
      <h2>{actor.name}</h2>
        <p>Movies: </p>
      <ul>
        {actor.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
})
  return (
    <div>
    <h1>Actors Page</h1>
    {actorsList}
    </div>
  )
}

export default Actors;
