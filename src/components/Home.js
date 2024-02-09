import Hero from "./Hero";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";
import Carousel from "./Carousel";
// 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
// 38cdc64ccb498aad76f12ea17d9849dc
const Home = () => {
  const [discover, setDiscover] = useState([]);
  const apiKey = "38cdc64ccb498aad76f12ea17d9849dc";
  const history = useHistory();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
    )
      .then((response) => response.json())
      .then((data) => setDiscover(data.results));
  }, []);
  function handleClickAbout() {
    history.push("/about");
  }
  function handleClickSearch() {
    history.push("/search");
  }
  return (
    <div>
      <Hero backdropImg="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <div style={{ height: "350px" }} className="row justify-content-start">
          <div className="row w-50">
            <h1 className="text-start my-4 mx-2 text-capitalize">
              search for your favorite movies
            </h1>
            <p className="text-start mx-2">
              View most recently updated information and details about your
              favorite movie by clicking the details button on movie card
            </p>
            <div className="d-flex flex-direction-column justify-content-start my-3">
              <button
                onClick={handleClickAbout}
                className="btn btn-outline-danger p-2"
              >
                About Us
              </button>
              <button
                onClick={handleClickSearch}
                className="btn btn-outline-danger"
              >
                Search View
              </button>
            </div>
          </div>
        </div>
      </Hero>
      <div className="container">
        <div className="row">
          <Carousel />
          <div className="col-lg-6 my-5 d-flex ">
            <p className="align-self-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              voluptatibus ipsa reiciendis deserunt odit harum pariatur quis
              numquam, sint illum, eaque laborum, esse hic autem illo dolore
              incidunt nulla ducimus! Lorem
            </p>
          </div>
          <h4>Recently Popular Movies:</h4>
          <span>see the card details</span>
          {discover.map((movie, id) => {
            return <MovieCard movie={movie} number={id + 1} key={id} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
