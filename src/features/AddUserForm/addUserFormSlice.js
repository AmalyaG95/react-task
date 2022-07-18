import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addUser } from "./addUserFormAPI";

const initialState = {
    firstName: '',
    lastName: '', 
    gender: '',
    address: '',
    phoneNumber: '',
};

export const addUserAsync = createAsyncThunk(
    'addUserForm/addUser',
    async (AddUserFormData) => {
      const response = await addUser(AddUserFormData); 
      return response.name;
    } 
);

export const addUserFormSlice = createSlice({
    name: 'addUserForm',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state[action.payload.inputName] =  action.payload.data;
        },
        resetUserData: (state) => {
            state.firstName = '';
            state.lastName = '';
            state.gender = '';
            state.address = '';
            state.phoneNumber = '';
            
        },
    },
});

export const { setUserData, resetUserData } = addUserFormSlice.actions;
export const selectAddUserFormData = (state) =>  ({
    AddUserFormData: state.addUserForm,
  });

export const addUserRequest = (AddUserFormData) => (dispatch) => {
    dispatch(addUserAsync(AddUserFormData));
    dispatch(resetUserData());
}

export default addUserFormSlice.reducer;

