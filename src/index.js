import React from "react";
import ReactDOM from "react-dom";

import style from "./sass/main.scss";

import CassetteTape from './components/cassette-tape/cassette-tape';

const Index = () => {
  return (
    <div className="app">
      <CassetteTape animate={true} progress={50} topText="awesome mix" bottomText="totally awesome dude"/>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
