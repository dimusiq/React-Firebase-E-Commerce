import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
    currentUser: null

}

//reducer function that state object and action
const userReducer = (state = INITIAL_STATE, action) => {
    //depending on what the type of action is the switch //statement check if the case equal to current_user //then it return a new object out of this reducer function
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        //if none of case action match then we just //return to default current state
        default:
            return state;
    }
}

export default userReducer;