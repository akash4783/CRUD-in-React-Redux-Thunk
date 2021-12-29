import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import { Form,Button,Col} from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import { adduser, getSingleUser } from '../redux/action';
import { useNavigate } from 'react-router-dom';


const EditUser=()=>{
    const {id}= useParams()
    const {user}= useSelector((state)=>state.data)
   
 
    const dispatch = useDispatch()
    const history = useNavigate()
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
        history("/")


    }

}
useEffect(()=>{
    dispatch(getSingleUser(id))
},[id])
const handlcancle=()=>{
    history("/")

}
useEffect(()=>{
    if(user){
        setdata({...user})
    }
},[user])
    return(
        <div>
            <Form onSubmit={handlesubmit}>
        
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" name="first_name" value={first_name ||""} onChange={handlchange} />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Last Name" name="last_name" value={last_name ||""} onChange={handlchange} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Email</Form.Label>
    <Form.Control type="text" placeholder="Email" name="email" value={email ||""} onChange={handlchange} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Button variant="warning" onClick={handlcancle}>Cancle</Button>
</Form>

        </div>
    )
}


export default EditUser