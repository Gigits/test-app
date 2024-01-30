import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function MovieDetailsView() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(0);
  const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=38cdc64ccb498aad76f12ea17d9849dc&language=en-US`;
  useEffect(() => {
    fetch(movieUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        console.log(data);
      });
    console.log("make a request!");
  }, [id]);
  const moviePosterImg = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
  console.log(id);

  return (
    <div>
      <Hero
        backdropImg={movieDetails.backdrop_path}
        text="here are some details about the selected Movie"
      />
      <div className="movie-info">
        <div>
          <h1> {movieDetails.original_title} </h1>
          <img src={moviePosterImg} alt={movieDetails.original_title} />
        </div>
        <div>
          <p>{movieDetails.overview}</p>
        </div>
      </div>
    </div>
  );
}
export default MovieDetailsView;
