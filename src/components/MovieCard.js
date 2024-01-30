import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const moviePosterURl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const movieDetailUrl = `movieDetails/${movie.id}`;
  return (
    <div className="col-sm-4 col-lg-3 my-5">
      <div class="card">
        <img
          src={moviePosterURl}
          class="card-img-top"
          alt={movie.original_title}
        />
        <div class="card-body">
          <h5 class="card-title">{movie.original_title}</h5>
          <Link to={movieDetailUrl} class="btn btn-primary">
            details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
