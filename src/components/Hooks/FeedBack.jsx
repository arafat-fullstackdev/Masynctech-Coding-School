import React, { useState } from 'react'

function FeedBack() {

    //? UseState
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [submittedData, setSubmittedData] = useState(null);
    const [isSubmitFeedback, setIsSubmitFeedback] = useState(false);

    // State update
    const handleNameChange = (e)=> {
        //console.log(e.target)
        setName(e.target.value);
    }
    const handleMessageChange = (e)=> {
        setMessage(e.target.value)
    }

    //! Handle submit
    const handleSubmit = (e)=> {
        e.preventDefault(e);
       setSubmittedData({name, message});
      
        setIsSubmitFeedback(true);
        setName("");
        setMessage("");
        };
    
  return (
    <div>
        <form onSubmit={handleSubmit}> 
            <div>
                <label >
                    Name:
                    <input value={name} onChange={handleNameChange} type="text" />
                </label>
            </div>
            <br/>
             <div>
                <label >
                    Message:
                    <textarea value={message} onChange={handleMessageChange} type="message" />
                </label>
            </div>
<button type='submit'>Submit FeedBack</button>   
     </form>
      
   
      {isSubmitFeedback && setSubmittedData &&(
            <div
                style={{
                    marginTop: "15px",
                    padding: "10px",
                    border: "2px solid #333"
                }}>
                <h2>Name:{submittedData.name}</h2>
                <p>Message:{submittedData.message}</p>
            </div>
  )}

   </div>
  
  )}

export default FeedBack;