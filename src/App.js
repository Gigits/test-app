import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import SearchView from "./components/SearchView";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log(searchText, "is the search text!");
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=38cdc64ccb498aad76f12ea17d9849dc&language=en-US&query=${searchText}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results);
        console.log(data);
      });
  }, [searchText]);
  console.log(searchResults);
  return (
    <div>
      <NavBar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
