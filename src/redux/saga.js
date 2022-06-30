import { takeLatest } from 'redux-saga/effects';
import {call, put} from 'redux-saga/effects';

import types from './actionTypes';
import { resetUserData, setUsers } from './actionCreators';
import { addUser } from './requests/AddUserForm';
import { deleteUser, editUser, getUsers } from './requests/UsersList';

function* handleAddUser ({payload}) {
    try {
        yield call(addUser(payload));
        yield put(resetUserData());

    } catch (e) {
        console.log(e);
    }
}

function* handleGetUsers() {
    try {
        const usersData = yield call(getUsers());               
        if (usersData) {                    
            const usersIds = Object.keys(usersData);
            const usersArray = Object.values(usersData).map((user, index) => {
            return ({
                ...user,
            id: usersIds[index],
            }) 
            });
            yield put(setUsers(usersArray));
        }

    } catch (e) {
        console.log(e);
    }
};

function* handleDeleteUser({payload: {id, users}}) {
    try {
        yield call(deleteUser(id));     
        
        const usersNewList = users.filter(user => user.id !== id);
        yield put(setUsers(usersNewList));
    } catch (e) {
        console.log(e);
    }
};

function* handleEditUser({payload: {editableUser, users}}) {
    try {
       const editedUser =  yield call(editUser(editableUser));          
        
        const usersNewList = users.map(user => {
            if (user.id === editableUser.id) return editedUser;
            return user;
        });        
        yield put(setUsers(usersNewList));
    } catch (e) {
        console.log(e);
    }
};

export default function* watcherSaga() {
        yield takeLatest(types.ADD_USER_REQUEST, handleAddUser);
        yield takeLatest(types.GET_USERS_REQUEST, handleGetUsers);
        yield takeLatest(types.DELETE_USER_REQUEST, handleDeleteUser);
        yield takeLatest(types.EDIT_USER_REQUEST, handleEditUser);
}