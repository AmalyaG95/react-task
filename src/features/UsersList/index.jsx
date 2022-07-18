import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiDotsVerticalRounded } from "react-icons/bi";
import cls from "classnames";

import styles from "./index.module.scss";
import {
    closeDropdown,
    deleteUserAsync,
    openDropdown,
    openEditUserModal,
    setEditableUser,
    getUsersAsync,
} from "./usersListSlice";
import { selectUsersListData } from "./usersListSlice";
import EditUserModal from "../EditUserModal";

const header = ["Name", "Last Name", "Address", "Phone", "Gender"];

const UsersList = () => {
    const [selectedRowId, setSelectedRowId] = useState("");
    const dispatch = useDispatch();
    const { users, isOpenEditUserModal, isOpenDropdown, isRequestEnded } =
        useSelector(selectUsersListData);

    useEffect(() => {
        dispatch(getUsersAsync());
    }, []);

    const handleOpenDropdown = (id) => {
        setSelectedRowId(id);
        if (isOpenDropdown) dispatch(closeDropdown());
        else dispatch(openDropdown());
    };

    const handleDelete = (id) => {
        dispatch(deleteUserAsync({ id }));
    };

    const handleOpenEditUserModal = (user) => {
        dispatch(setEditableUser(user));
        dispatch(openEditUserModal());
    };

    return (
        <>
            {users.length ? (
                <table className={styles.usersTable}>
                    <thead>
                        <tr>
                            {header.map((item, index) => (
                                <th key={index}>{item}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.address}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td className={styles.genderCell}>
                                        {user.gender}
                                        <button
                                            onClick={() =>
                                                handleOpenDropdown(user.id)
                                            }
                                            className={styles.dropBtn}
                                        >
                                            <BiDotsVerticalRounded />
                                        </button>
                                        <div
                                            className={cls(
                                                styles.dropdownContent,
                                                {
                                                    [styles.visible]:
                                                        isOpenDropdown &&
                                                        user.id ===
                                                            selectedRowId,
                                                }
                                            )}
                                        >
                                            <ul className={styles.menu}>
                                                <li
                                                    onClick={() =>
                                                        handleOpenEditUserModal(
                                                            user
                                                        )
                                                    }
                                                >
                                                    Edit
                                                </li>
                                                <li
                                                    onClick={() =>
                                                        handleDelete(user.id)
                                                    }
                                                >
                                                    Delete
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : isRequestEnded ? <p className={styles.noUsers}>No Users!</p>  : null}

            {isOpenEditUserModal && <EditUserModal />}
        </>
    );
};

export default UsersList;
