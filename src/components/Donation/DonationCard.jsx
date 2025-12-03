import React from 'react'

function DonationCard(props) {
    console.log(props.name)
    console.log(props.message)
  return (
    <div>
       <section style={{
        backgroundColor: "grey",
        border: "2px solid #888",
        margin: "10px",
        padding: "6px"
       }}>
         <h2>Give Donation</h2>
        <p>Save African Children</p>
        <button style={{color: "green"}}>Pay Now</button>
        <h3>Hello! {props.name}</h3>
        <h3>Hello! {props.message}</h3>
       </section>
    </div>
  )
}

export default DonationCard