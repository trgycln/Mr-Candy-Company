import ActionTypes from "../Actions/ActionTypes";


const initialState = {
	pending:true,
	success:false,
	teas:[],
	error:false,
	errorMessage:""
}

const teasReducer = (state=initialState, action)=> {

switch (action.payload) {
	case ActionTypes.teasActions.GET_TEAS_START:
		
		return {
			...state,
			pending:true
		}

	case ActionTypes.teasActions.GET_TEAS_SUCCESS:
		return{
			...state,
			pending:false,
			success:true,
			teas:[...state.teas,action.payload]
		}

	case ActionTypes.teasActions.GET_TEAS_FAIL:
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

export default teasReducer;