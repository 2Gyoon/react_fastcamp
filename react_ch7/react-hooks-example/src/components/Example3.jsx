import React from 'react';

// useState => count
// useState => {count : 0}
export default function Example3(){
  const [state, setState] = React.useState({count : 0});

  return (
    <div>
      <p>You cliked {state.count} times</p>
      <button onClick={click}>click me</button>
    </div>
  );

  function click(){
    // setState({count : state.count + 1});
    setState(state => {
      return {
        count : state.count + 1,
      }
    });
  }
}