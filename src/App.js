import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Menu from "./components/Menu";
import React from "react";
import Data from "./data.json";

function App() {
  return (
    <React.Fragment>
      <Menu />
      <Header />
      <Gallery Data={Data} />
    </React.Fragment>
  );
}

export default App;
