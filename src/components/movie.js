import React from "react";
import { Link } from "react-router-dom";
const Movie = ({ movies }) => {
  console.log(movies);
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img src={movie.medium_cover_image} alt={movie.title}></img>
          <h2>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </h2>
          <p>{movie.summary}</p>
          <ul>
            {movie.genres.map((g, index) => (
              <li key={index}>{g}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movie;
