import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <i className="header-logo fas fa-leaf"></i>
        <span>Habit Tracker</span>
        <span className="header-count">{this.props.totalCount}</span>
      </div>
    );
  }
}

export default Header;