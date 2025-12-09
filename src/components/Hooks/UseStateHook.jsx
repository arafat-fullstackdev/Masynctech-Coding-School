import React, {useState} from 'react'

function UseStateHook() {

    const [count, setCount] = useState(0);
    //console.log(count);
    const [show,setShow] = useState(true);

  return (
    <div>
        <h2>useState Hook!</h2>
        <p>Your Count:{count}</p>
        <button onClick={()=> setCount(count+1)}>Increase</button>
        <button onClick={()=> setCount(count-1)}>Decrease</button>
        <hr />
        <button onClick={()=> setShow(!show)}>Toggle</button>
        <p>{show && "Hello Toggle Button!"}</p>
    </div>
  )
}

export default UseStateHook;