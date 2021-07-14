import React, { Component } from 'react'
import axios from 'axios'
import { useContext } from 'react'

export default class Register extends Component {
  
state={
    name:"",
    phn:"",
    loc:""
}
handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}

handleSubmit=(e)=>{
    e.preventDefault()
    const data={...this.state}
    const url="https://contact-manager-app-b47fd-default-rtdb.firebaseio.com/contacts.json"
     axios.post(url,data).then((res)=>{
         if(res.status===200){
             console.log("successsss")
             this.props.history.push("/show")
             this.setState({
                name:"",
                phn:"",
                loc:""
                })
         }
     }).catch((err)=>{
         console.log(err)
     })
    
}
  
    render() {
        return (
            <div className="container">
            <form onSubmit={this.handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="string" className="form-control" 
    id="exampleInputEmail1" aria-describedby="emailHelp"
     name="name" value={this.state.name}  onChange={this.handleChange}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Mobile</label>
    <input type="string" className="form-control"
     id="exampleInputPassword1" name="phn" value={this.state.phn} onChange={this.handleChange}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Location</label>
    <input type="string" className="form-control" 
    id="exampleInputPassword1" name="loc" value={this.state.loc} onChange={this.handleChange}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            </div>
        )
    }
}
