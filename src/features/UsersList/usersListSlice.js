import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers, editUser, deleteUser } from "./usersListAPI";

const initialState = {
    users: [],
    editableUser: null,
    isOpenEditUserModal: false,
    isOpenDropdown: false,
    isRequestEnded: false,
};

export const getUsersAsync = createAsyncThunk(
    "addUserForm/getUsers",
    async () => {
        const response = await getUsers();
        return response;
    }
);

export const editUserAsync = createAsyncThunk(
    "addUserForm/editUser",
    async ({ editableUser }) => {
        const response = await editUser(editableUser);
        return response;
    }
);

export const deleteUserAsync = createAsyncThunk(
    "addUserForm/deleteUser",
    async ({ id }) => {
        await deleteUser(id);
        return id;
    }
);

export const usersListSlice = createSlice({
    name: "userList",
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setEditableUser: (state, action) => {
            state.editableUser = action.payload;
        },
        resetEditableUser: (state) => {
            state.editableUser = null;
        },
        openEditUserModal: (state) => {
            state.isOpenEditUserModal = true;
        },
        closeEditUserModal: (state) => {
            state.isOpenEditUserModal = false;
        },
        openDropdown: (state) => {
            state.isOpenDropdown = true;
        },
        closeDropdown: (state) => {
            state.isOpenDropdown = false;
        },
        setIsRequestEnded: (state, action) => {
            state.isRequestEnded = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsersAsync.fulfilled, (state, { payload: users }) => {
                if (users) {
                    const usersIds = Object.keys(users);
                    const usersArray = Object.values(users).map(
                        (user, index) => {
                            return {
                                ...user,
                                id: usersIds[index],
                            };
                        }
                    );

                    state.users = usersArray;
                }
            })
            .addCase(
                editUserAsync.fulfilled,
                (state, { payload: editableUser }) => {
                    const usersNewList = state.users.map((user) => {
                        if (user.id === editableUser.id) return editableUser;
                        return user;
                    });
                    state.users = usersNewList;
                }
            )
            .addCase(deleteUserAsync.fulfilled, (state, { payload: id }) => {
                const usersNewList = state.users.filter((user) => {
                    return user.id !== id;
                });
                state.users = usersNewList;
            });
    },
});

export const {
    setUsers,
    setEditableUser,
    resetEditableUser,
    openEditUserModal,
    closeEditUserModal,
    openDropdown,
    closeDropdown,
    setIsRequestEnded,
} = usersListSlice.actions;

export const selectUsersListData = ({
    usersList: {
        users,
        editableUser,
        isOpenEditUserModal,
        isOpenDropdown,
        isRequestEnded,
    },
}) => ({
    users,
    editableUser,
    isOpenEditUserModal,
    isOpenDropdown,
    isRequestEnded,
});

export default usersListSlice.reducer;
