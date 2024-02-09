import { useEffect, useState } from "react";

const TVseries =
  "https://api.themoviedb.org/3/trending/tv/day?api_key=38cdc64ccb498aad76f12ea17d9849dc&language=en-US'";
const Carousel = () => {
  const [tvSeries, setTvSeries] = useState([]);
  //   ("https://image.tmdb.org/t/p/w500");
  useEffect(() => {
    fetch(TVseries)
      .then((response) => response.json())
      .then((data) => {
        setTvSeries(data.results);
      });
  }, []);
  console.log(tvSeries);
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide my-5 col-lg-6"
      data-bs-ride="carousel"
    >
      <h2> TV Series:</h2>
      <div className="carousel-inner">
        {tvSeries.map((obj, i) => (
          <div
            key={i}
            className={i === 0 ? "carousel-item active" : "carousel-item"}
            style={{ position: "relative" }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${obj.backdrop_path}`}
              className="d-block w-100 carousel-image"
              alt="..."
              style={{ zIndex: "-1", position: "relative" }}
            />
            <div className="carousel-overview">
              <h3 style={{ textAlign: "center", textTransform: "capitalize" }}>
                {obj.original_name}
              </h3>
              <p>{obj.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
