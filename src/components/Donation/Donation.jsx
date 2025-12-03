import React from 'react'
import DonationCard from './DonationCard'

function Donation({name,message}) {
  return (
    <div>
      <DonationCard name="Masyntech" message="Save the children"/>
      <DonationCard name="Coding" message="Save the nation"/>
    </div>
  )
}

export default Donation