import React, { useState } from 'react'

function SearchProduct() {

   
  return (
    <div>

     <input type="text"
    value={input}
    onChange={(e)=>setInput(e.target.value)}
     
     />


    </div>
  )
}

export default SearchProduct