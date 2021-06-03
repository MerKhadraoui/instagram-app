import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { faFileVideo } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const list = <FontAwesomeIcon icon={faListAlt} />;
  const video = <FontAwesomeIcon icon={faFileVideo} />;
  const tv = <FontAwesomeIcon icon={faTv} />;
  const tagg = <FontAwesomeIcon icon={faIdBadge} />;
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
          </span>
        </div>
      </div>
      <div className="content-two">
        <span> </span> <h3>Parks AR</h3>
        <span></span>
        <h3>Arctic life</h3>
        <span></span>
        <h3>Covide sh...</h3>
      </div>
      <div className="gallery-menu">
        <span>
          {list}
          <a href="https://example.com">POSTS</a>
        </span>
        <span>
          {video}
          <a href="https://example.com">REELS</a>
        </span>
        <span>
          {tv}
          <a href="https://example.com">IGTV</a>
        </span>
        <span>
          {tagg}
          <a href="https://example.com">TAGGED</a>
        </span>
      </div>
    </div>
  );
};
export default Header;
