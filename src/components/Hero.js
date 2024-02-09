const Hero = ({ backdropImg, children }) => {
  return (
    <div
      style={backdropImg && { height: "450px" }}
      className={
        !backdropImg
          ? "bg-dark text-white p-5 position-relative"
          : "text-white  position-relative"
      }
    >
      <div>{children}</div>
      {backdropImg && (
        <div
          className="backdrop-Div"
          style={{
            backgroundImage: `url(${backdropImg})`,
          }}
        ></div>
      )}
    </div>
  );
};
export default Hero;
