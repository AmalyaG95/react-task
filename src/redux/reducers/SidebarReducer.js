import types from '../actionTypes';

const initialState = {
    categories: [],
    isOpened: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CATEGORIES: {
            return {
                ...state,
                categories: action.categories,
            }
        }

        case types.SET_IS_OPENED: {
            return {
                ...state,
                isOpened: true,
            }
        }

        case types.RESET_IS_OPENED: {
            return {
                ...state,
                isOpened: false,
            }
        }

        default: return state;
    }
}

export default reducer;