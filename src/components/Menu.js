import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  return (
    <div className="menu">
      <FontAwesomeIcon icon={["fal", "coffee"]} />
      Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
    </div>
  );
};
export default Menu;
