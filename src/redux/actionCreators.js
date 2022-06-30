import types from "./actionTypes";

const createAction = (actionType) => (payload) => {
    if (!payload) payload = {}; 

    return ({
        type: actionType,
        payload,
    });
};

const setData = createAction(types.SET_USER_DATA);
const resetUserData = createAction(types.RESET_USER_DATA);
const addUserRequest = createAction(types.ADD_USER_REQUEST);
const getUsersRequest = createAction(types.GET_USERS_REQUEST);
const setUsers = createAction(types.SET_USERS);
const deleteUserRequest = createAction(types.DELETE_USER_REQUEST);
const setEditableUser = createAction(types.SET_EDITABLE_USER);
const resetEditableUser = createAction(types.RESET_EDITABLE_USER);
const openEditUserModal = createAction(types.OPEN_EDIT_USER_MODAL);
const closeEditUserModal = createAction(types.CLOSE_EDIT_USER_MODAL);
const editUserRequest = createAction(types.EDIT_USER_REQUEST);
const openDropdown = createAction(types.OPEN_DROPDOWN)
const closeDropdown = createAction(types.CLOSE_DROPDOWN)

export {
    setData,
    resetUserData,
    addUserRequest,
    getUsersRequest,
    setUsers,
    deleteUserRequest,
    setEditableUser,
    resetEditableUser,
    openEditUserModal,
    closeEditUserModal,
    editUserRequest,
    openDropdown,
    closeDropdown,
};