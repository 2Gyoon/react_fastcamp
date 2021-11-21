import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react';
import Myinput from './components/Myinput';

function App(){
  const myInputRef = useRef();
  const click = () => {
    console.log(myInputRef.current.value);
  }
  return (
    <div>
      <Myinput ref={myInputRef} />
      <button onClick={click}>send</button>
    </div>
  )
}

export default App;
