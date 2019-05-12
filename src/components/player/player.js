import React from "react";
import PropTypes from 'prop-types';

import styles from "./player.scss";


class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      progress: 0
    };
    this.audio = new Audio(this.props.audioPath);
    this.audio.addEventListener('playing', (event) => {})
    this.audio.addEventListener('ended', (event) => {})
    //Start audio progress checker
    this._getProgressChecker();
  }

  componentDidMount(){}

  //Checks progress every 300 ms and updates it to state
  _getProgressChecker(){
    let _this = this,
    timeout = window.setInterval(function(){
      _this.setState({
        progress: _this._getProgress()
      })
    }, 300);

  }

  //Does our fancy progress calculations
  _getProgress(){
    return this.audio.currentTime / this.audio.duration * 100
  }

  _handleClick(){
    if(this.state.playing == true){
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.setState(prevState => ({
      playing: !prevState.playing
    }));
  }

  render(){
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        animate: this.state.playing,
        progress: this.state.progress
       })
    );

    return(
      <div className="player" onClick={this._handleClick.bind(this)}>
        { childrenWithProps }
      </div>
    )
  }
}

Player.propTypes = {
  audio: PropTypes.string
}

export default Player;
