import React, { Component } from 'react';

export class Home extends Component {
  render() {
    return (
      <div>
        {
          this.props.children
        }
      </div>
    );
  }
}

Home.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object.isRequired,
};
