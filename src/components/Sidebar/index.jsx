import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import cls from 'classnames';
import { FaBars, FaTimes } from 'react-icons/fa';

import styles from './index.module.scss';
import types from '../../redux/actionTypes';
import { selectSidebarData } from '../../redux/selectors';
// import { getCategories } from '../../redux/actions';

const Sidebar = () => {
    const { categories, isOpened } = useSelector(selectSidebarData);
    const dispatch = useDispatch();

    useEffect(() => {
        // getCategories();
        (async () => {
            try {
                const response = await fetch('https://api.thecatapi.com/v1/categories');
                const categoriesData = await response.json();
                if (categoriesData.error) {
                    throw categoriesData.error;
                }
                dispatch({ type: types.SET_CATEGORIES, categories: categoriesData });

            } catch (e) {
                console.log(e);
            }

        })()
    }, [dispatch]);

    const toggleOpenSidebar = () => {
        if (isOpened) {
            dispatch({ type: types.RESET_IS_OPENED });
        } else {
            dispatch({ type: types.SET_IS_OPENED });
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
