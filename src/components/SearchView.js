import Hero from "./Hero";

const MovieCard = ({ movie }) => {
  const moviePosterURl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
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
          <a href="goSomeWhere" class="btn btn-primary">
            details
          </a>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `you are searching for ${keyword}`;
  const searchHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  return (
    <div>
      <Hero text={title} />
      {searchHtml && (
        <div className="container">
          <div className="row">{searchHtml}</div>
        </div>
      )}
    </div>
  );
};
export default SearchView;

// my Api key for movies: 38cdc64ccb498aad76f12ea17d9849dc
// --url: 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'
