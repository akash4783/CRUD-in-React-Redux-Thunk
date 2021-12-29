import * as types from './actiontype'

const initialState={
    users:[],
    user:{},
    loading:false
}



const usersreducer = (state=initialState,action)=>{
    switch (action.type) {
        case types.GET_USERS:
            return {
                ...state,
               users: action.payload,
               loading:false
            }
       
        
        case types.DELETE_USERS:
            case types.ADD_USERS:
            return{
                ...state,
                loading:false
            }
        case types.GET_SINGLE_USER:
            return{
                ...state,
                user:action.payload,
                loading:false
            }
        default:
            return state
    }

}

export default usersreducer