import React, { Component } from 'react';

class Navbar extends Component {
  inputRef = React.createRef();
  onSubmit = event => {
    event.preventDefault();
    // console.log(this.inputRef.current.value);
    const name = this.inputRef.current.value;
    this.inputRef.current.value = '';//입력한 것을 초기화
    name && this.props.onAdd(name); //name이 있다면 props의 onAdd함수에 name을 전달
  };
  render() {
    // const input = document.querySelector('s');
    // input.value;
    // input의 데이터를 알아오기 위해서 기존의 자바스크립트는 이렇게 사용하여 s의 데이터를 가져왔습니다.
    // 하지만 react에서는 Ref를 쓰면 됩니다.
    
    return (
      <form className="add-habit" onSubmit={this.onSubmit}>
        <input ref= {this.inputRef} type="text" className="add-input" placeholder='Please enter your habit'/>
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default Navbar;