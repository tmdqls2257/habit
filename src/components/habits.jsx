import React, { Component } from 'react';
import Habit from './habit';
import HabitAddNav from './navbar';
import Reset from './reset';


class Habits extends Component {
  handleAdd = name => {
    this.props.onAdd(name);
  }

  render(){
    return (
      <>
      <HabitAddNav onAdd={this.handleAdd} />
      <ul>
      {
        this.props.habits.map(habit => (
          <Habit 
          key={habit.id} 
          habit = {habit} 
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
          onDelete={this.props.onDelete}
          onAdd={this.handleAdd}
          />//Habit 이라는 prop이름에 각각 habit의 데이터를 전달해 주는 것
          )
          )}
          <Reset onReset={this.props.onClick}/>
    </ul>
    </>
    );
  }
}

export default Habits;