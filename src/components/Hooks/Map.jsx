import React from 'react'

function Map() {
    //const renderData = ['JS','Java','Assembly'];
    const mostUse = [
        {id: 1, name: "React" },
        {id: 2, name: "Angular" },
        {id: 3, name: "Next" },
        {id: 4, name: "Nest" },
    ];
  return (
    <div>
        <h1>Data Rendering using by Map</h1>
        <section>
           
            {mostUse.map((users)=>{
            return <li key={users.id}>{users.name}</li>
            })}
        </section>
       
    </div>
  )
}

export default Map