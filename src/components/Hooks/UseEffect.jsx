import React, { useEffect, useState } from "react";

function UseEffect() {

  const [count,setCount] = useState(0);
  useEffect(() => {
    //Side effect code will go here
    console.log("Render App!");
  }, [count]);

  return <div>
    <h2>UseEffect Code here</h2>
    <p>Count:{count}</p>
    <button onClick={()=> setCount(count+2)}>Increase</button>
    </div>;
}

export default UseEffect;
