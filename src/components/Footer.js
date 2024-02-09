const Footer = () => {
  return (
    <div style={{ background: "#3f518a" }}>
      <div className="row m-0">
        <div className="row  justify-content-center p-0 m-0">
          <div className="social-media-icons m-0">
            <a href="https://www.facebook.com/gigi.tsiramua/" target="blank">
              <img
                src="https://static.vecteezy.com/system/resources/previews/018/930/476/original/facebook-logo-facebook-icon-transparent-free-png.png"
                alt="faceBook"
              />
            </a>
            <a href="https://www.instagram.com/gigitsiramua/" target="blank">
              <img
                src="https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584853.png"
                alt="instaGram"
              />
            </a>
            <a href="something here" target="blank">
              <img
                src="https://cdn.icon-icons.com/icons2/4029/PNG/512/twitter_x_new_logo_x_circle_icon_256076.png"
                alt="tweeter"
              />
            </a>
          </div>
          <p className="footer-content">some information here</p>
          <p className="footer-content">
            📞 : +995551299575 📮 : gigia.ts@gmail.com
          </p>
          <div className="bg-dark d-flex flex-direction-column justify-content-around">
            <span style={{ color: "#f3f3f3" }}>© all rights received !</span>
            <span style={{ color: "#f3f3f3" }}>
              powered by blabla something here!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
