import ActionTypes from "../Actions/ActionTypes";


const initialState = {
	pending:true,
	success:false,
	chocolates:[],
	error:false,
	errorMessage:""
}

const chocolatesReducer = (state=initialState, action)=>{
	switch (action.payload) {
		case ActionTypes.chocolateActions.GET_CHOCOLATE_START:
			return{
				...state,
				pending:true
			}
		
		case ActionTypes.chocolateActions.GET_CHOCOLATE_SUCCESS:
			return {
				...state,
				pending:false,
				success:true,
				chocolates:[...state.chocolates,action.payload],
			}

		case ActionTypes.chocolateActions.GET_CHOCOLATE_FAIL:
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

export default chocolatesReducer;