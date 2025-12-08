import React, { useState } from 'react'

function Form() {
    const [name,setName] = useState("");
    

    function handleSubmit(e){
       // console.log(e)
       //? Stop page Refreshing
       e.preventDefault();
       console.log(e);
    }
  return (
    <div>
        <section>
            <h2>React JS Form</h2>'
            <h3>You are typing: {name}</h3>
           <form onSubmit={handleSubmit}>
             <label htmlFor="">Name</label>
            <input onChange={(e)=> setName(e.target.value)} value={name} type="text" />
            <button>Submit</button>
            </form>
        </section>
    </div>
  )
}

export default Form