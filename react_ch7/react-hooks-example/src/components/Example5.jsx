import React from 'react';

// useState => count
// useState => {count : 0}
export default function Example5(){
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("componentDidMount");

    return () => {
      // clean up
      // componentWillUnmount
    };
    // uesEffect는 여러개 사용할 수 있음
  }, []);
  // 빈 배열을 넣으면 최초에만 실행되게 한다는  뜻

  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by count", count);
    // useEffect 함수는 componentDidMount & componentDidUpdate 일때 모두 사용
    return () => {
      // clean up
      console.log('cleanup by count', count);
    };
  }, [count]);

  return (
    <div>
      <p>You cliked {count} times</p>
      <button onClick={click}>click me</button>
    </div>
  );

  function click(){
    // setState({count : state.count + 1});
    setCount(count + 1);
  }
}