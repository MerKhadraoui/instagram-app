const Header = () => {
  return (
    <div className="header">
      <div className="content-one">
        <div className="imag">
          <img src="./img/profil.jpg" />
        </div>
        <div className="follow">
          <span>
            <h1>natgeo</h1>{" "}
            <button className="button-follow " type="submit">
              Follow
            </button>
            <h1> ...</h1>
          </span>
          <span>
            {" "}
            <h3>25,035 posts </h3> <h3>165m followers </h3>{" "}
            <h3>131 following </h3>{" "}
          </span>
          <span>
            <h2>National Geographic</h2>
          </span>
          <span className="text">
            <span>
              <h4>
                Experience the world through the eyes of National Geographic
                photographers.
              </h4>
            </span>
            {/* <a href="https://nationalgeographic.like2buy.curalate.com/c/gallery/like2buy?id=71xx76mM&l=like2buy" /> */}
          </span>
        </div>
      </div>
      <div className="content-two">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
export default Header;
