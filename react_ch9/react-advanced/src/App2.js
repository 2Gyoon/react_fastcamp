import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const Person = React.memo(({name, age}) => {
  /*
  shouldComponentUpdate(previousProps){
    for(const key in this.props){
      if(previousProps[key] !== this.props[key]){
        return true;
      }
    }
    return false;
  }
  */

  console.log('Person render');
  
  return (
    <div>
      {name} / {age}
    </div>
  )

});

function App(){
  const [state, setState] = React.useState({
    text : "",
    persons: [
      {id : 1, name: "Anna", age: 52},
      {id : 2, name: "Mark", age: 21},
    ]
  });

  const toPersonClick = React.useCallback(() => {}, []);

  const {text, persons} = state;
  return (
    <div>
      <input type="text" value={text} onChange={_change} />
      <ul>{persons.map(person => {
        return <Person {...person} key={person.id} onClick={toPersonClick}/>
      })}</ul>
    </div>
  );

  
  function _change(e){
    setState({
      ...state,
      text: e.target.value
    });
  }
}

export default App;
