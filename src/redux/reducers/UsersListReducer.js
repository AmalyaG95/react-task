import types from '../actionTypes';

const initialState = {
    users: [],
    editableUser: null,
    isOpenEditUserModal: false,
    isOpenDropdown: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USERS: {
            return {
                ...state,
                users: action.payload,
            }
        }

        case types.SET_EDITABLE_USER: {
            return {
                ...state,
                editableUser: action.payload,
            }
        }

        case types.RESET_EDITABLE_USER: {
            return {
                ...state,
                editableUser: null,
            }
        }

        case types.OPEN_EDIT_USER_MODAL: {
            return {
                ...state,
                isOpenEditUserModal: true,
            }
        }

        case types.CLOSE_EDIT_USER_MODAL: {
            return {
                ...state,
                isOpenEditUserModal: false,
            }
        }

        case types.OPEN_DROPDOWN: {
            return {
                ...state,
                isOpenDropdown: true,
            }
        }

        case types.CLOSE_DROPDOWN: {
            return {
                ...state,
                isOpenDropdown: false,
            }
        }

        default: return state;
    }
}

export default reducer;