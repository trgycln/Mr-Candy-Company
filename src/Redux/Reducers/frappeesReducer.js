import ActionTypes from "../Actions/ActionTypes";


const initialState = {
	pending:true,
	success:false,
	frapees:[],
	error:false,
	errorMessage:""
}

const frappeesReducer = (state=initialState, action)=>{
	switch (action.payload) {
		case ActionTypes.frappesActions.GET_FRAPPES_START:
			return{
				...state,
				pending:true
			}
		
		case ActionTypes.frappesActions.GET_FRAPPES_SUCCESS:
			return {
				...state,
				pending:false,
				success:true,
				coffes:[...state.frapees,action.payload],
			}

		case ActionTypes.frappesActions.GET_FRAPPES_FAIL:
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

export default frappeesReducer;