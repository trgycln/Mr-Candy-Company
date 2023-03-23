import ActionTypes from "../Actions/ActionTypes";


const initialState = {
	pending:true,
	success:false,
	lemonades:[],
	error:false,
	errorMessage:""
}

const lemonadesReducer = (state=initialState, action)=>{
	switch (action.payload) {
		case ActionTypes.lemonadesActions.GET_LEMONADES_START:
			return{
				...state,
				pending:true
			}
		
		case ActionTypes.lemonadesActions.GET_LEMONADES_SUCCESS:
			return {
				...state,
				pending:false,
				success:true,
				lemonades:[...state.lemonades,action.payload],
			}

		case ActionTypes.lemonadesActions.GET_LEMONADES_FAIL:
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

export default lemonadesReducer;