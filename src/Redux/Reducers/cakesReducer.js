import ActionTypes from "../Actions/ActionTypes"

const initialState = {
		pending:true,
		success:false,
		cakes:[],
		error:false,
		errorMessage:""
	}


const cakesReducer = (state=initialState,action)=>{
switch (action.payload) {

	case ActionTypes.cakesActions.GET_CAKES_START:
	return {
		...state,
		pending:true,
	}

	case ActionTypes.cakesActions.GET_CAKES_SUCCESS:
		return {
			...state,
			pending:false,
			success:true,
			cakes:[...state.cakes,action.payload],
			error:false
		}
	
	case ActionTypes.cakesActions.GET_CAKES_FAIL:
		return {
			...state,
			pending:false,
			success:false,
			error:true,
			errorMessage:action.payload
		}

	default:
		return state;
}
}

export default cakesReducer;