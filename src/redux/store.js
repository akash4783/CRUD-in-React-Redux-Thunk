import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk"
import rootreducer from "./root-reducer";

const middlewares =[reduxThunk]

if(process.env.NODE_ENV==="development"){
    middlewares.push(logger)
}

const store= createStore(rootreducer,applyMiddleware(...middlewares))


export default store

