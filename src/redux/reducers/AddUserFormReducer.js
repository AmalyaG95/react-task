import types from '../actionTypes';

const initialState = {
    firstName: '',
    lastName: '', 
    gender: '',
    address: '',
    phoneNumber: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USER_DATA: {
            return {
                ...state,
                [action.payload.inputName]: action.payload.data,
            }
        }

        case types.RESET_USER_DATA: return initialState;        
        
        default: return state;
    }
}

export default reducer;