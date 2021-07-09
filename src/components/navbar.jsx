
import React, {memo} from 'react';

const Navbar = memo(props => {
  const inputRef = React.createRef();

  const onSubmit = event => {
    event.preventDefault();
    // console.log(this.inputRef.current.value);
    const name = inputRef.current.value;
    inputRef.current.value = '';//입력한 것을 초기화
    name && props.onAdd(name); //name이 있다면 props의 onAdd함수에 name을 전달
  };

  return (
    <form className="add-habit" onSubmit={onSubmit}>
      <input ref= {inputRef} type="text" className="add-input" placeholder='Please enter your habit'/>
      <button className="add-button">Add</button>
    </form>
  );
});

export default Navbar;