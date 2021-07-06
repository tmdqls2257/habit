import './app.css';
import Habits from './components/habits';
import Header from './components/header';
import React, { Component } from 'react';

class App extends Component {
  state = {
    habits:[
      { id: 1, name: 'Reading', count: 0},
      { id: 2, name: 'Runnung', count: 0},
      { id: 3, name: 'Coding', count: 0},
    ],
    totalCount: 0,
  };

  
  handleIncrement = habit =>{//react는 state를 직접적으로 변경시키는 것은 좋지 않다.
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
      this.setState({habits});
      this.setState((state) => {
        return{totalCount: state.totalCount + 1};
      });
  };

  handleDecrement = habit =>{
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0: count; //좋지는 않은 코드
    this.setState({habits});
    this.setState((state) => {
      return{totalCount: state.totalCount - 1};
    });
  };

  handleDelete = habit =>{
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
  };

  resetAll = () => {
    const habits = [...this.state.habits];
    const index = habits.map(habits => (habits.count));
    this.setState({index});
  }

  totalScore = () => {
    let result = 0;
    this.state.habits.forEach(item => result += item.count);
    this.setState({totalCount: result});
  }
  
  render() {
    return (
      <>
      <Header totalCount = {this.state.totalCount}/>
      <Habits 
          key={this.state.habits.id} 
          habits = {this.state.habits} 
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          />
      </>
    );
  }
}

export default App;

