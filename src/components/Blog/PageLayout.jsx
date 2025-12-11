import React from 'react';
import {data} from './data';

function PageLayout() {
  return (
    <div>
   <h2>Blog Data</h2>
   <div>
    {data.map((post)=>(
        
     <h2 key={post.id}>
    {post.name}
    <hr />
    <span
    style={{
      margin: "6px",
      padding: "3px"
    }}>{post.description}</span>
     </h2>

     
        
    ))}
   </div>
    </div>
  )
}

export default PageLayout;