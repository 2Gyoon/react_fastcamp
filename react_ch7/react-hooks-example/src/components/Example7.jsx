
import { useCallback, useMemo, useState } from "react"

function sum(persons){
  console.log("sum...");
  return (
    persons.map(person => person.age).reduce((l,r) => l + r, 0)
  );
}

export default function Example7(){
  const [value, setValue] = useState('');
  const [persons] = useState([
    {name : "Hanna", age:55},
    {name : "Mark", age:35},
  ]);

  const count = useMemo(() => {
    return sum(persons);
  }, [persons]) 
  
  const click = useCallback(() => {
    console.log(value);
  }, []); // [] 최초에만 함수가 생성되게 하는 제한을 줌

  return (
    <div>
      <input value={value} onChange={change} />
      <p>{count}</p>
      <button onClick={click}>click</button>
    </div>
  );

  function change(e){
    setValue(e.target.value);
  }
}