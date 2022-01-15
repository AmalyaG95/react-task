import types from '../actionTypes';

const initialState = {
    cats: [],
    page: 1,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CATS: {
            return {
                ...state,
                cats: action.cats
            }
        }

        case types.LOAD_CATS: {
            const catsCopy = state.cats;

            return {
                ...state,
                cats: [...catsCopy, ...action.cats],
            }
        }

        case types.SET_PAGE: {
            return {
                ...state,
                page: state.page + 1,
            }
        }

        case types.RESET_PAGE: {
            return {
                ...state,
                page: 1,
            }
        }

        case types.RESET_CATS: {
            return {
                ...state,
                cats: [],
            }
        }
        default: return state;
    }
}

export default reducer;