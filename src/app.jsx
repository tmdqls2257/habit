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
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id){
        return {...habit, count: habit.count + 1};//deconstructing오브젝트
        //habit에 있는 데이터를 복사해와서 오브젝트로 만든다.
        // habit의 카운트만 1증가
      } 
      return item;
    })
    this.setState({ habits });
      // this.setState((state) => {
      //   return{totalCount: state.totalCount + 1};
      // });
  };

  handleDecrement = habit =>{
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id){
        const count = habit.count - 1;
        return {...habit, count: count < 0 ? 0 : count};//deconstructing오브젝트
        //habit에 있는 데이터를 복사해와서 오브젝트로 만든다.
        // habit의 카운트만 1증가
      } 
      return item;
    })
    // habits[index].count = count < 0 ? 0: count; //좋지는 않은 코드
    this.setState({habits});
    // this.setState((state) => {
    //   return{totalCount: state.totalCount - 1};
    // });
  };

  handleDelete = habit =>{
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
  };

  resetAll = () => {
    const habits = this.state.habits.map(habit => {
      if (habit.count !== 0){
        return {...habit,count: 0};
      } 
      return habit;
    })
    this.setState({habits});
    this.setState({totalCount: 0});
  }

  totalScore = () => {
    let result = 0;
    this.state.habits.forEach(item => result += item.count);
    this.setState({totalCount: result});
  }
  
  handleAdd = name => {
    const habits = [...this.state.habits, {id: Date.now(), name: name, count:0}]
    //spread opperater: habit에 있는 아이템들을 하나하나씩 새로운 배열로 복사
  //Date.now현재 날짜와 시간으로 고유 아이디를 만든다.
  //name: name은 name으로 생략 가능
  this.setState({habits});
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
          onClick={this.resetAll}
          onAdd={this.handleAdd}
          onReset={this.resetAll}
          />
      </>
    );
  }
}

export default App;

