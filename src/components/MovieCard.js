import { Link } from "react-router-dom";

const MovieCard = ({ movie, number }) => {
  const moviePosterURl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const movieDetailUrl = `movieDetails/${movie.id}`;
  const noImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png";
  return (
    <div className="col-sm-4 col-lg-3 my-5">
      <div className="card">
        {number && <h5 className="number">{number}</h5>}
        <img
          src={!movie.poster_path ? noImage : moviePosterURl}
          className="card-img-top"
          alt={movie.original_title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={movieDetailUrl} className="btn btn-primary">
            details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
