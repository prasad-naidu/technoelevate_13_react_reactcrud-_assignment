import {router}  from "./router/router"
import React,{useState} from "react"
// import { logProvider } from "./components/context/logContext"
import loginContext from "./components/context/logContext"
function App() {
  const [login, setlogin] = useState(false)

  function handleLogin(){
    setlogin(true)
  }
  function hanleLogout(){
    setlogin(false)
  }

  const data={
    login:login,
    handleLogin:handleLogin,
    hanleLogout:hanleLogout
  }
  return (
    <>
<loginContext.Provider value={data}>
{router}
</loginContext.Provider>
   
    </>
  );
}

export default App;
