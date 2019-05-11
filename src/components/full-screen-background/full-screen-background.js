import React from "react";
import PropTypes from 'prop-types';

import styles from './full-screen-background.scss';

class FullScreenBackground extends React.Component {
  render(){
    return(
      <div className="full-screen-background">
        <img  className="full-screen-background-image"
              src={this.props.image} />
      </div>
    )
  }
}

FullScreenBackground.propTypes = {
  image: PropTypes.string
}

export default FullScreenBackground;
