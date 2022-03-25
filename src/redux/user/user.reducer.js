import UserActionTypes  from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

//reducer function that state object and action
const userReducer = (state = INITIAL_STATE, action) => {
    //depending on what the type of action is the switch //statement check if the case equal to current_user //then it return a new object out of this reducer function
    switch (action.type) {
        case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
        case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
        case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        //if none of case action match then we just //return to default current state
        default:
            return state;
    }
}

export default userReducer;