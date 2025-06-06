import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../backend/auth'
import store from '../../store/store'
import {logout} from '../../store/authSlice.js'
import { toast } from "react-hot-toast";

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authService.logout()
        .then(()=>{
            dispatch(logout())
            toast('Logged out😔')
            console.log("Redux state after logout:", store.getState());
        })
    }
  return (
    <button
    onClick={logoutHandler}
        className="md:inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-yellow-400 rounded-lg hover:bg-yellow-300 neon-border"
    >
        Logout
    </button>
  )
}

export default LogoutBtn