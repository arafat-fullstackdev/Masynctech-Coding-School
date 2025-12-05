import React, { useState } from 'react'

function HookProject() {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [gender, setGender] = useState("");

 //Event Handelers
 const handleChangename = (e)=>{
    e.value.target(name)
 }
  const handleChangeEmail = (e)=>{
    e.value.target(email)
 }

 //? Stop Refreshing page
  const  eventHandle=(e)=>{
  e.preventDefault(e);
  };


  return (
    <form action="">
        <h2>React Hook Project using by Form!</h2>
     <div>
      <label>
        Name:
        <input type="name" />
      </label>
     </div>
     <br/>
     <div>
      <label>
        Email:
        <input type="email" />
      </label>
     </div>
     <div>
      <label>
        Password:
        <input type="password" />
      </label>
     </div>
     <div>
      <label>
        Gender:
        <input type="radio" />
        Male
       
      </label>
      </div>
      <div>
        <label>
             <input type="radio" />
        Female
        </label>
      </div>
     
     <div>
      <label>
        Options:
        <select name="" id="">
            <option value="">Chose</option>
        <option value="">Apple</option>
        <option value="">Banana</option>
        </select>
      </label>
     </div>
     <div>
        comments:
        <textarea cols={6}></textarea>
     </div>
     
    
    </form>

  )
}

export default HookProject;