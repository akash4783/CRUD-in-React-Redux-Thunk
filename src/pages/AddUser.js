import React, { useState } from 'react';
import { Form,Button,Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { adduser } from '../redux/action';
import { useNavigate } from 'react-router-dom';

const AddUser=()=>{
    const dispatch = useDispatch()
   
    const[data,setdata]=useState({
        first_name:"",
        last_name:"",
        email:""
    })
const{first_name,last_name,email} =data
const handlchange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})

}
const handlesubmit=(e)=>{
    if(!first_name || !last_name|| !email){
        alert("all field required")
    }else{
        dispatch(adduser(data))
     


    }

}

const checkData = useSelector((state)=>state.data.user)
console.log(checkData)
    return(
        <div>
            <Form onSubmit={handlesubmit}>
        
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" name="first_name" value={first_name} onChange={handlchange} />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Last Name" name="last_name" value={last_name} onChange={handlchange} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Email</Form.Label>
    <Form.Control type="text" placeholder="Email" name="email" value={email} onChange={handlchange} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Button variant="warning">Cancle</Button>
</Form>

        </div>
    )
}


export default AddUser