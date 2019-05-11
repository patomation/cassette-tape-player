import React from "react";
import PropTypes from 'prop-types';

import face from './face.png';
import spindle from './spindle.png';
import style from './cassette-tape.scss';

class CassetteTape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  componentDidMount() {
    console.log('IM MOUNTED');
  }

  render(){
    // Dealing with tape progress
    let minWidth = 145,
        maxWidth = 400,
        reelLeftWidth = minWidth + (maxWidth - minWidth) * ((100 - this.props.progress)/100),
        reelRightWidth = minWidth + (maxWidth - minWidth) * (this.props.progress/100);

    return (
      <div className='cassette-tape'>
          <h1 className="cassette-tape-top-text">{this.props.topText}</h1>
          <h1 className="cassette-tape-bottom-text">{this.props.bottomText}</h1>

          <div className="cassette-tape-face">
            <img src={face} />
          </div>

          <div className="cassette-tape-spindle-left">
            <img
              className={this.props.animate ? 'rotating' : null}
              src={spindle} />
          </div>

          <div className="cassette-tape-spindle-right">
            <img
              className={this.props.animate ? 'rotating' : null}
              src={spindle} />
          </div>

          <div className="cassette-tape-progress">
            <div className="cassette-tape-reel-container-left">
              <div className="cassette-tape-reel-left"
                   style={{
                     width:  reelLeftWidth+'%',
                     height: reelLeftWidth+'%'
                   }}>
              </div>
            </div>
            <div className="cassette-tape-reel-container-right">
              <div className="cassette-tape-reel-right"
                   style={{
                     width:  reelRightWidth+'%',
                     height: reelRightWidth+'%'
                   }}>
              </div>
            </div>
          </div>
        </div>
    );
  }
}



export default CassetteTape;
