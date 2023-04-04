import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovie(json.data.movie);
  };
  console.log(movie);
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      {loading ? (
        <h2>...Loading</h2>
      ) : (
        <div>
          <img src={movie.medium_cover_image}></img>
          <h2>{movie.title}</h2>
          <p>{movie.description_full}</p>
          <ul>
            {movie.genres.map((genre) => (
              <li>{genre}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Detail;
