import {createStore, combineReducers} from "redux";
import cakesReducer from "./Reducers/cakesReducer";
import teasReducer from "./Reducers/teasReducer";


const rootReducer = combineReducers({
	cakesStates:cakesReducer,
	teasStates:teasReducer
})


const store = createStore (rootReducer)

export default store;