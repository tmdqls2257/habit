import React, { Component } from 'react';

class Habit extends Component {
  render(){
    return (
    <li className='habit'>
    <span className="habit-name">Reading</span>
    <span className="habit-count">2</span>
    <button class="habit-button habit-plus">
      <i className="fas fa-plus-circle"></i>
    </button>
    <button class="habit-button habit-minus">
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