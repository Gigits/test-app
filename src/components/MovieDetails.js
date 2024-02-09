import Hero from "./Hero";
import Review from "./Review";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";

const MovieDetailsView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState("");
  const [showTrailer, setShowTrailer] = useState(false);
  const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=38cdc64ccb498aad76f12ea17d9849dc&language=en-US&append_to_response=videos`;

  const noImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png";
  useEffect(() => {
    fetch(movieUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        console.log(data);
      });
    console.log("make a request!");
  }, [id, movieUrl]);
  const moviePosterImg = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
  const movieBackdropPath = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
  console.log(id);
  const youtubeVid = movieDetails
    ? movieDetails.videos.results.find(
        (result) => result.name === "Official Trailer"
      )
    : null;
  function handleTrailer() {
    setShowTrailer((value) => !value);
  }
  return (
    <div>
      <Hero backdropImg={movieDetails.backdrop_path ? movieBackdropPath : null}>
        {showTrailer && (
          <YouTube
            containerClassName={"video-div"}
            videoId={youtubeVid ? youtubeVid.key : null}
            opts={{ width: "100%", height: "450px" }}
          />
        )}
        {youtubeVid && (
          <button
            className={`position-absolute bottom-0 end-0 my-5 mx-3 btn ${
              showTrailer ? "btn-outline-danger" : "btn-outline-primary"
            }`}
            onClick={handleTrailer}
          >
            {showTrailer ? "Close Trailer" : "Show Trailer"}
          </button>
        )}
        {!movieDetails.backdrop_path && (
          <h1>Search Result for {movieDetails.original_title}</h1>
        )}
      </Hero>
      <div className="mx-3 row my-5">
        <div className="col bg-dark text-white">
          <h1> {movieDetails.original_title} </h1>
          <img
            className="img"
            src={!movieDetails.poster_path ? noImage : moviePosterImg}
            alt={movieDetails.original_title}
          />
        </div>
        <div className="col mx-1 row align-items-center">
          <ul style={{ listStyle: "none" }} className="row">
            {movieDetails.genres &&
              movieDetails.genres.map((genre) => (
                <li className="col-4 mx-2 my-3 genres" key={genre.id}>
                  {genre.name}{" "}
                </li>
              ))}
          </ul>
          <p className="more-info">{movieDetails.overview}</p>
          <span>
            {movieDetails.budget ? `Budget:${movieDetails.budget}$` : null}
          </span>
          <span>votes:{movieDetails.vote_average}/10</span>
          {movieDetails.revenue > 0 && (
            <span>
              Revenue(Profit):{movieDetails.revenue}(
              {movieDetails.revenue - movieDetails.budget})$
            </span>
          )}
        </div>
      </div>
      <Review />
    </div>
  );
};

export default MovieDetailsView;
