import React from 'react'
import { useContext } from 'react'
import { useHistory } from 'react-router'
import loginContext from './context/logContext'

export default function Logout() {
    const context = useContext(loginContext)
    const history= useHistory()
    return (
        <div>
            <button onClick={()=>{
                context.hanleLogout()
                history.push("/")
            }}>
             logout
            </button>
        </div>
    )
}
