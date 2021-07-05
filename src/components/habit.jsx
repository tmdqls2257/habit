import React, { Component } from 'react';



class Habit extends Component {
  handleIncrement = () =>{
    this.props.onIncrement(this.props.habit);
  }

  handleDecrement = () =>{
    this.props.onDecrement(this.props.habit);
  }

  handleDelete = () =>{
    this.props.onDelete(this.props.habit);
  }

  render(){
    console.log(this.props.habit);//데이터가 자동으로 props로 전달
    const { name, count } = this.props.habit;
    //자동으로 habit에 있는 데이터가 name과 count에 담겨진다.
    //단 동일한 이름을 사용해야한다. 

    return (
    <li className='habit'>
    <span className="habit-name">{name}</span>
    <span className="habit-count">{count}</span>
    <button class="habit-button habit-plus" onClick={this.handleIncrement}>
      <i className="fas fa-plus-circle"></i>
    </button>
    <button class="habit-button habit-minus"  onClick={this.handleDecrement}>
      <i className="fas fa-minus-circle"></i>
    </button>
    <button class="habit-button habit-trash" onClick={this.handleDelete}>
      <i className="fas fa-trash"></i>
    </button>
    </li>
    );
  }
}

export default Habit;