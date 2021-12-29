
import React,{useEffect} from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {  loadusers } from '../redux/action';
import { deleteusers } from '../redux/action';
import {Button} from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router';
import "./Home.css"


const Home=()=>{
    const {id}=useParams()
    const history = useNavigate()
    const handleclick=()=>{
        history("/Adduser")
    }
    
const {users}= useSelector((state)=>state.data)
// console.log(my)
const dispatch = useDispatch()
 useEffect(()=>{
     dispatch(loadusers())
    },[])

    const handledelete=(id)=>{
        if(window.confirm("Are sure to Delete")){
            dispatch(deleteusers(id))
        }
    
    }
    return(
        <div className="table">
             <Button style={{margin:'0.5rem'}} variant="primary" onClick={handleclick}>Add User</Button>
            
  <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Sr.no</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>

{
    users.map((item,id)=>{
        return (<tr key={id}>
            <td>{id+1}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td> {item.email}</td>
            <td>
            <Button variant="danger" onClick={()=>{handledelete(item.id)}}>Delete</Button>
            <Button style={{margin:'0.5rem'}} variant="primary" onClick={()=>{history(`/editUser/${item.id}`)}}>Edit</Button>
            </td>
            

        </tr>)
    })
}
    
  </tbody>
</Table>
        </div>
    )
}
export default Home


