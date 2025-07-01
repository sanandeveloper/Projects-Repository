

import React from 'react'

 const emableDrakmode=()=>{


  document.querySelector('body').classList.add('dark')

 }
  const disabledarkMode=()=>{
  document.querySelector('body').classList.remove('dark')
 }

 const toogletheme=(e)=>{
    
  if (e.target.checked) {
    disabledarkMode()
    
  }else{

    emableDrakmode()
  }


 }





function Switch() {
  return (
    <div>

      <input type="checkbox"
      
      onChange={toogletheme}
      
      />
    </div>
  )
}

export default Switch