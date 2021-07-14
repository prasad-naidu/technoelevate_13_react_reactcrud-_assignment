import {Link,BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Home from '../components/home'
import Login from '../components/login'
import Register from '../components/register'
import Contacts from '../components/contacts'
// import { logConsumer } from '../components/context/logContext'
import loginContext from '../components/context/logContext'
import Logout from '../components/logout'

export const router=(
    <Router>  
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="/">Home</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
< loginContext.Consumer>  

{
    (data)=>{
 if(data.login){
     return(
<>
<li class="nav-item">
        <Link class="nav-link" to="/register">register</Link>
      </li>
       
      <li class="nav-item">
        <Link class="nav-link" to="/show">contact list</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/logout">logout</Link>
      </li>
</>
        
     )
 }
 else{
     return(
        <>
       <li class="nav-item">
        <Link class="nav-link" to="/login">login</Link>
      </li>
        </>
     )
 }
    }
}
</loginContext.Consumer>

    </ul>
  </div>
</nav>
<Switch> 
<Route path="/" component={Home} exact />
<Route path="/register" component={Register} exact />
<Route path="/show" component={Contacts} exact />
<Route path="/logout" component={Logout} exact />
<Route path="/login" component={Login} exact />


</Switch>

</Router>

)