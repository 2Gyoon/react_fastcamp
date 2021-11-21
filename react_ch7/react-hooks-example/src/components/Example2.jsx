import React from 'react';

export default function Example2(){
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You cliked {count} times</p>
      <button onClick={click}>click me</button>
    </div>
  );

  function click(){
    setCount(count + 1);
  }
}