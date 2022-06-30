import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./index.module.scss";
import { selectUsersListData } from "../../redux/selectors";
import {
    closeDropdown,
    closeEditUserModal,
    editUserRequest,
    resetEditableUser,
    setEditableUser,
} from "../../redux/actionCreators";

const EditUserModal = () => {
    const { editableUser, users } = useSelector(selectUsersListData);
    const dispatch = useDispatch();

    const handleCloseEditUserModal = () => {
        dispatch(closeEditUserModal());
        dispatch(resetEditableUser());
        dispatch(closeDropdown());
    };

    const handleChange = (e, inputName) => {
        const editedUser = {
            ...editableUser,
            [inputName]: e.target.value,
        };
        dispatch(setEditableUser(editedUser));
    };

    const handleEditUser = () => {
        dispatch(editUserRequest({ editableUser, users }));
        dispatch(closeEditUserModal());
        dispatch(resetEditableUser());
        dispatch(closeDropdown());
    };

    const stopProp = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={styles.container} onClick={handleCloseEditUserModal}>
            <div className={styles.modalContent} onClick={stopProp}>
                <span
                    className={styles.close}
                    id="close"
                    onClick={handleCloseEditUserModal}
                >
                    &times;
                </span>
                <div className={styles.form}>
                    <h1>Edit User</h1>
                    <div>
                        <label htmlFor="firstName">Name</label>
                        <input
                            id="firstName"
                            type="text"
                            placeholder="First Name"
                            value={editableUser.firstName}
                            onChange={(e) => handleChange(e, "firstName")}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            id="lastName"
                            type="text"
                            placeholder="Last Name"
                            value={editableUser.lastName}
                            onChange={(e) => handleChange(e, "lastName")}
                        />
                    </div>
                    <div>
                        <label htmlFor="gender">Gender</label>
                        <div>
                            <input
                                type="radio"
                                name="gender"
                                id="male"
                                value="male"
                                checked={editableUser.gender === "male"}
                                onChange={(e) => handleChange(e, "gender")}
                            />
                            <label htmlFor="male">Male</label>
                            <input
                                type="radio"
                                name="gender"
                                id="female"
                                value="female"
                                checked={editableUser.gender === "female"}
                                onChange={(e) => handleChange(e, "gender")}
                            />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <input
                            id="address"
                            type="text"
                            placeholder="Address"
                            value={editableUser.address}
                            onChange={(e) => handleChange(e, "address")}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input
                            id="phone"
                            type="phone"
                            placeholder="Phone"
                            value={editableUser.phoneNumber}
                            onChange={(e) => handleChange(e, "phoneNumber")}
                        />
                    </div>
                    <div className={styles.actionButtons}>
                        <button
                            className={styles.editBtn}
                            onClick={handleEditUser}
                        >
                            Save
                        </button>
                        <button
                            id="cancelBtn"
                            onClick={handleCloseEditUserModal}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditUserModal;
