import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../card'

function App() {
  const [themeMode, setthemeMode] = useState('light')
  const[text,setText]=useState('Light Mode')

   const onchangeBtn=(e)=>{

    if (e.target.checked) {
      setthemeMode('dark')
      setText('Dark Mode')
      
    }else{

      setthemeMode('light')
      setText('Light Mode')
    }

   }



   useEffect(()=>{

    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(themeMode)
    

   })

  return (
  <div className='mt-50'>
    <div className='flex justify-center items-center mb-6'>
    <label className='mr-2' htmlFor="">{text}</label>
    <input className='' type="checkbox"
    onChange={onchangeBtn}
   checked={themeMode==='dark'}    
    
    
    />
    </div>
    <div className='grid place-content-center'>
    <Card/>
    </div>
    




  </div>
      
  )
}

export default App
