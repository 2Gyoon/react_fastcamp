import React from "react";

export default React.forwardRef(function Myinput(props, ref){
  return (
    <div>
      <p>Myinput</p>
      <input ref={ref}/>
    </div>
  )
}) 