import React, { Component } from 'react';

class Habit extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () =>{
    this.setState({count: this.state.count + 1});
  }

  handleDecrement = () =>{
    const counter = this.state.count - 1;
    this.setState({count: counter < 0 ? 0 : counter});
  }

  render(){
    return (
    <li className='habit'>
    <span className="habit-name">Reading</span>
    <span className="habit-count">{this.state.count}</span>
    <button class="habit-button habit-plus" onClick={this.handleIncrement}>
      <i className="fas fa-plus-circle"></i>
    </button>
    <button class="habit-button habit-minus"  onClick={this.handleDecrement}>
      <i className="fas fa-minus-circle"></i>
    </button>
    <button class="habit-button habit-trash">
      <i className="fas fa-trash"></i>
    </button>
    </li>
    );
  }
}

export default Habit;