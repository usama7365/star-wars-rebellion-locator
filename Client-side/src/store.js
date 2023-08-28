import { createStore , applyMiddleware , combineReducers } from "redux";
import thunk from "redux-thunk";
import { entityDataReducer } from "./Reducers/entityReducer";

const reducer = combineReducers({
entityData:entityDataReducer
})

const middleware = [thunk]
const initialState={}

const store = createStore(
    reducer , 
    initialState , 
    applyMiddleware(...middleware)
)

export default store