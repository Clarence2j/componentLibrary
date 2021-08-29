import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Alert extends Component {
  static propTypes = {
    name: PropTypes.string
  }

  static defaultProps = {
    name: 'wuli'
  }

  onHandleClick = e => {
    alert(this.name)
  }

  render() {
    return (
      <div>
        <div onClick={this.onHandleClick}>dfdfdfdfdf</div>
      </div>
    )
  }
}

export default Alert;