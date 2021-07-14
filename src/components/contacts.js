import axios from 'axios'
import React, { Component } from 'react'
import { Modal,Button } from 'react-bootstrap'

export default class Contacts extends Component {
    state={
        contacts:[],
        show:false,
        name:"",
        phn:"",
        loc:"",
        id:""
    }

handleClose=()=>{
    this.setState({
        show:false
    })
}


handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
updateContacts=(contacts)=>{
    const{name,phn,loc,id}=contacts
    this.setState({
        show:true,
        name,
        phn,
        loc,
        id
    })
}
    componentDidMount() {
        const url="https://contact-manager-app-b47fd-default-rtdb.firebaseio.com/contacts.json"
        
        axios.get(url).then((res)=>{
            let newdata=[]
            for(const key in res.data){
                newdata.push({id:key,...res.data[key]})
             this.setState({
                 contacts:newdata
             })
            }
        })
    }
    remove=(d)=>{
axios.delete(`https://contact-manager-app-b47fd-default-rtdb.firebaseio.com/contacts/${d.id}.json`)
.then((res)=>{
   let update= this.state.contacts.filter((e)=>{
        return e.id!==d.id
    })
this.setState({
    contacts:[...update]
})
}).catch((err)=>{
    console.log(err)
})   
    }


updateRecord=()=>{
    const url=`https://contact-manager-app-b47fd-default-rtdb.firebaseio.com/contacts/${this.state.id}.json`

    const {name,phn,loc,id}=this.state

    let contact={
        name,phn,loc,id
    }
    axios.put(url,contact).then((res)=>{
        console.log(res.status)
       let newData=this.state.contacts.map((resp)=>{
           return resp.id !==this.state.id ? resp:contact
       })
       this.setState({
           show:false,
           contacts:newData,
           name:"",
          phn:"",
          loc:"",
          id:""

       })

    }).catch((err)=>{
        console.log(err)
    })
}

    render() {
        return (
            <div className="container">
                <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">S No</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Region</th>
    </tr>
  </thead>
  <tbody>
    {
        this.state.contacts.map((data,i)=>{
            return(
               <>
               <tr>
               <td> {++i}</td>
                <td> {data.name}</td>
                <td> {data.phn}</td>
                <td> {data.loc}</td>
                <button  className="btn btn-primary" onClick={()=>{
                    this.updateContacts(data)
                }} >Update</button>
                <button className="btn btn-danger" style={{marginLeft:"2px"}}
                onClick={()=>{
                    this.remove(data)
                }}
                >Delete</button>

               </tr>

               </>
            )
        })
    }
  </tbody>
</table>


<Modal show={this.state.show} animation={false} onHide={this.handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    

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
  
</form>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={this.handleClose}>Close</Button>
    <Button variant="primary" onClick={this.updateRecord}>Save changes</Button>
  </Modal.Footer>
</Modal>



            </div>
        )
    }
}
