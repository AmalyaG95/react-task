import types from '../actionTypes';

const initialState = {
    isOpenAlert: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_ALERT: {
            return {
                ...state,
                isOpenAlert: true,
            }
        }

        case types.CLOSE_ALERT: {
            return {
                ...state,
                isOpenAlert: false,
            }
        }

        
        default: return state;
    }
}

export default reducer;