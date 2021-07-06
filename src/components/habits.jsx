import React, { Component } from 'react';
import Habit from './habit';



class Habits extends Component {

  render(){
    return (<ul>
      {
        this.props.habits.map(habit => (
          <Habit 
          key={habit.id} 
          habit = {habit} 
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
          onDelete={this.props.onDelete}
          />//Habit 이라는 prop이름에 각각 habit의 데이터를 전달해 주는 것
        )
    )}
    </ul>
    );
  }
}

export default Habits;