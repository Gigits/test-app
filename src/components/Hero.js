const Hero = ({ text, backdropImg }) => {
  return (
    <div
      style={backdropImg && { height: "400px" }}
      className="bg-dark text-white p-5 position-relative"
    >
      <h1> {text}</h1>
      <div
        className="backdrop-Div"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdropImg})`,
        }}
      ></div>
    </div>
  );
};
export default Hero;
