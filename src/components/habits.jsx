import React, { Component } from 'react';
import Habit from './habit';



class Habits extends Component {
  state = {
    habits:[
      { id: 1, name: 'Reading', count: 0},
      { id: 2, name: 'Runnung', count: 0},
      { id: 3, name: 'Coding', count: 0},
    ],
  };

  handleIncrement = (habit) =>{//react는 state를 직접적으로 변경시키는 것은 좋지 않다.
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
      this.setState({habits});
  };

  handleDecrement = (habit) =>{
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0: count; //좋지는 않은 코드
    this.setState({habits});
  };

  handleDelete = (habit) =>{
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
  };

  render(){
    return (<ul>
      {
        this.state.habits.map(habit => (
          <Habit 
          key={habit.id} 
          habit = {habit} 
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          />//Habit 이라는 prop이름에 각각 habit의 데이터를 전달해 주는 것
        )
    )}
    </ul>
    );
  }
}

export default Habits;