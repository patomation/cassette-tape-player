import React from "react";
import ReactDOM from "react-dom";

import style from "./sass/main.scss";

import CassetteTape from './components/cassette-tape/cassette-tape';

import FullScreenBackground from "./components/full-screen-background/full-screen-background";
import image from "./images/retro-background.jpg";

const Index = () => {
  return (
    <div className="app">
      <CassetteTape animate={true} progress={50} topText="awesome mix" bottomText="totally awesome dude" />
      <FullScreenBackground image={image} />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
