import ActionTypes from "../Actions/ActionTypes";


const initialState = {
	pending:true,
	success:false,
	sosAndWhippeds:[],
	error:false,
	errorMessage:""
}

const sosAndWhippedsReducer = (state=initialState, action)=>{
	switch (action.payload) {
		case ActionTypes.sosAndwhippedActions.GET_SOS_START:
			return{
				...state,
				pending:true
			}
		
		case ActionTypes.sosAndwhippedActions.GET_SOS_SUCCESS:
			return {
				...state,
				pending:false,
				success:true,
				sosAndWhippeds:[...state.sosAndWhippeds,action.payload],
			}

		case ActionTypes.sosAndwhippedActions.GET_SOS_FAIL:
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

export default sosAndWhippedsReducer;