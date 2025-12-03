import React from 'react'

function DonationCard() {
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
       </section>
    </div>
  )
}

export default DonationCard