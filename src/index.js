import React from "react";
import ReactDOM from "react-dom";

import style from "./sass/main.scss";

import Center from './components/center/center.js';

import CassetteTape from './components/cassette-tape/cassette-tape';

import FullScreenBackground from "./components/full-screen-background/full-screen-background";
import image from "./images/retro-background.jpg";

import Player from "./components/player/player.js";
import music from "./audio/chill-hiphop.mp3";

const Index = () => {
  return (
    <div className="app">
      <Center>
        <Player audioPath={music}>
          <CassetteTape topText="awesome mix" bottomText="totally awesome dude" />
        </Player>
        <strong><p>{"[ Click The Tape To Play Music ]"}</p></strong>
      </Center>
      <FullScreenBackground image={image} />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
