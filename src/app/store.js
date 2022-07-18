import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

import addUserFormReducer from '../features/AddUserForm/addUserFormSlice';
import usersListReducer from '../features/UsersList/usersListSlice';

export const store = configureStore({
    reducer: {
        addUserForm: addUserFormReducer,
        usersList: usersListReducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});

window.store = store;