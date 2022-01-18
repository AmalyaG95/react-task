import types from '../actionTypes';

const initialState = {
    categories: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CATEGORIES: {
            return {
                categories: action.categories,
            }
        }

        default: return state;
    }
}

export default reducer;