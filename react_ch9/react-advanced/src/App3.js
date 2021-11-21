import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Modal from './components/modal';

function App(){
  const [visible, setVisible] = useState(false);

  const open = () => {
    setVisible(true);
  }
  const close = () => {
    setVisible(false);
  }

  return (
    <div>
      <button onClick={open}>open</button>
      {visible && <Modal><div style={{width: '100vw', height:'100vh', backgroundColor: 'rgba(0,0,0,0.5)'}} onClick={close}>Hello</div></Modal>}
    </div>
  )
}

export default App;
