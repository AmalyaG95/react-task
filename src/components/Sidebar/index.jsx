import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import cls from 'classnames';
import { FaBars, FaTimes } from 'react-icons/fa';

import styles from './index.module.scss';
import { selectSidebarData } from '../../redux/selectors';
import { getCategoriesRequest, resetIsOpen, setIsOpen } from '../../redux/actionCreators';

const Sidebar = () => {
    const { categories, isOpened } = useSelector(selectSidebarData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoriesRequest());
    }, [dispatch]);

    const toggleOpenSidebar = () => {
        if (isOpened) {
            dispatch(resetIsOpen());
        } else {
            dispatch(setIsOpen());
        }
    }

    return (
        <div className={styles.container}>
            <button onClick={toggleOpenSidebar}>{isOpened ? <FaTimes /> : <FaBars />}</button>
            <div className={cls(styles.wrapper, { [styles.opened]: isOpened })}>

                {categories.map((category) => (
                    <NavLink
                        className={(navData) => navData.isActive ? styles.active : ''}
                        key={category.id}
                        to={`/${category.id}`}>
                        {category.name.toUpperCase()}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;
