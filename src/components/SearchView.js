import Hero from "./Hero";
import MovieCard from "./MovieCard";

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
