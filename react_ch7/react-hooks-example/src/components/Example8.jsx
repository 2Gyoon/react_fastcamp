
import { createRef, useRef, useState } from "react"

export default function Example8(){
  const [value, setValue] = useState('');
  const input1Ref = createRef();  // ref생성해서 render 될 때 새로 넣어줌
  const input2Ref = useRef();  // render를 새로 해도 유지

  console.log(input1Ref.current);
  console.log(input2Ref.current);

  return (
    <div>
      <input value={value} onChange={change} />
      <input ref={input1Ref} />
      <input ref={input2Ref} />
    </div>
  );

  function change(e){
    setValue(e.target.value);
  }
}