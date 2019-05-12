import React from "react";
import PropTypes from 'prop-types';

import styles from './center.scss';

class Center extends React.Component {
  render(){
    return(
      <div className="center">
        {this.props.children}
      </div>
    )
  }
}


export default Center;
