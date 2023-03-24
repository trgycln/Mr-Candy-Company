import ActionTypes from "../Actions/ActionTypes";


const initialState = {
	pending:true,
	success:false,
	fruitPurees:[],
	error:false,
	errorMessage:""
}

const fruitPureesReducer = (state=initialState, action)=>{
	switch (action.type) {
		case ActionTypes.fruitPureesActions.GET_FRUITPUREES_START:
			return{
				...state,
				pending:true
			}
		
		case ActionTypes.fruitPureesActions.GET_FRUITPUREES_SUCCESS:
			return {
				...state,
				pending:false,
				success:true,
				fruitPurees:action.payload,
			}

		case ActionTypes.fruitPureesActions.GET_FRUITPUREES_FAIL:
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

export default fruitPureesReducer;