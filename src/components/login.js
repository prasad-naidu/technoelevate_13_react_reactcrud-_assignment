import React from 'react'
import { useContext } from 'react'
import { useHistory } from 'react-router'
import loginContext from './context/logContext'
export default function Login() {
     const context = useContext(loginContext)
   const history= useHistory()
    return (
        <div>
            <p>log in</p>
            <button onClick={()=>{
                context.handleLogin()
                history.push("/")
            }}> log in</button>
        </div>
    )
}
