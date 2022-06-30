import React from "react";
import { NavLink } from "react-router-dom";
import cls from "classnames";

import styles from "./index.module.scss";

const tabs = [
    {
        id: 1,
        name: "Add User",
        to: "/add-user",
    },
    {
        id: 2,
        name: "Users List",
        to: "/users",
    },
];

const Navbar = () => {
    return (
        <nav className={styles.tabs}>
            {tabs.map((item) => (
                <NavLink
                    key={item.id}
                    className={({ isActive }) =>
                        cls(styles.tabLink, { [styles.active]: isActive })
                    }
                    to={item.to}
                >
                    {item.name}
                </NavLink>
            ))}
        </nav>
    );
};

export default Navbar;
