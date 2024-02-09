import Hero from "./Hero";
import MovieCard from "./MovieCard";

const SearchView = ({ keyword, searchResults }) => {
  const title = `you are searching for ${keyword}`;
  const searchHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  return (
    <>
      <Hero>
        <h1>{title}</h1>
      </Hero>
      {searchResults.length > 1 ? (
        <div>
          {searchHtml && (
            <div className="container">
              <div className="row">{searchHtml}</div>
            </div>
          )}
        </div>
      ) : (
        <div
          style={{ height: "100vh" }}
          className="d-flex justify-content-center"
        >
          <h1 style={{ marginTop: "60px", textTransform: "uppercase" }}>
            🔭 search result not found... 😪
          </h1>
        </div>
      )}
    </>
  );
};
export default SearchView;

// my Api key for movies: 38cdc64ccb498aad76f12ea17d9849dc
// --url: 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'
