import * as types from './actiontype'
import axios from 'axios'

const getusers=(users)=>({
    type:types.GET_USERS,
    payload:users
})

const userdeleted =()=>(({
    type:types.DELETE_USERS,
    
})
)
const userAdded=()=>({
    type:types.ADD_USERS
})

const getUser=(user)=>({
    type:types.GET_SINGLE_USER,
    payload:user
})



export const loadusers=()=>{
    return function (dispatch){
        axios.get("http://localhost:3000/posts").then((response)=>{
            dispatch(getusers(response.data))
        }).catch((err)=> console.log(err))
    }
}



export const deleteusers=(id)=>{
    return function (dispatch){
        axios.delete(`http://localhost:3000/posts/${id}`).then((response)=>{
            dispatch(userdeleted())
            dispatch(loadusers())
        }).catch((err)=> console.log(err))
    }
}



export const adduser=(user)=>{
    return function (dispatch){
        axios.post(`http://localhost:3000/posts`,user).then((response)=>{
            dispatch(userAdded())
            dispatch(loadusers())
        }).catch((err)=> console.log(err))
    }
}



export const getSingleUser=(id)=>{
    return function(dispatch){
        axios.get(`http://localhost:3000/posts/${id}`).then((response)=>{
            dispatch(getUser(response.data))

        }).catch((err)=> console.log(err))
    }
}


