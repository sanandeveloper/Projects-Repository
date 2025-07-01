import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {logout as authlogout} from '../store/authSlice'
function LogoutBtn() {

    const navigate=useNavigate()
    const dispatch=useDispatch()
    const userdata=useSelector((state)=>state.auth.userData)
    const status=useSelector((state)=>state.auth.status)

    const data={status,userdata}
    

    const handleLogout=()=>{

        dispatch(authlogout(data))
        navigate('/')

    }

  return (
     <button onClick={handleLogout}>Log Out</button>
  )
}

export default LogoutBtn