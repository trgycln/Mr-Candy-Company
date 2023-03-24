import {createStore, combineReducers} from "redux";
import cakesReducer from "./Reducers/cakesReducer";
import teasReducer from "./Reducers/teasReducer";
import chocolatesReducer from "./Reducers/chocolatesReducer";
import coffeesReducer from "./Reducers/cofeesReducer";
import equipmentsReducer from "./Reducers/equipmentsReducer";
import frappeesReducer from "./Reducers/frappeesReducer";
import fruitPureesReducer from "./Reducers/fruitPureesReducer";
import lemonadesReducer from "./Reducers/lemonadesReducer";
import sosAndWhippedsReducer from "./Reducers/sosAndWhippedReducer";
import syrupsReducer from "./Reducers/syrupsReducer";


const rootReducer = combineReducers({
	cakesStates:cakesReducer,
	teasStates:teasReducer,
	chocolatesState:chocolatesReducer,
	coffeesState:coffeesReducer,
	equipmentsState:equipmentsReducer,
	frappeesState:frappeesReducer,
	fruitPureesState:fruitPureesReducer,
	lemonadesState:lemonadesReducer,
	sosAndWhippedsState:sosAndWhippedsReducer,
	syrupsState:syrupsReducer
})


const store = createStore (rootReducer)

export default store;