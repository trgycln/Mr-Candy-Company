import ActionTypes from "../Actions/ActionTypes";


const initialState = {
	pending:true,
	success:false,
	syrups:[],
	error:false,
	errorMessage:""
}

const syrupsReducer = (state=initialState, action)=>{
	switch (action.type) {
		case ActionTypes.syrupsActions.GET_SYRUPS_START:
			return{
				...state,
				pending:true
			}
		
		case ActionTypes.syrupsActions.GET_SYRUPS_SUCCESS:
			return {
				...state,
				pending:false,
				success:true,
				syrups:action.payload,
			}

		case ActionTypes.syrupsActions.GET_SYRUPS_FAIL:
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

export default syrupsReducer;