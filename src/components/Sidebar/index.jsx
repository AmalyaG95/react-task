import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from './index.module.scss';
import types from '../../redux/actionTypes';
import { selectSidebarData } from '../../redux/selectors';
import { getCategories } from '../../redux/actions';

const Sidebar = () => {
    const { categories } = useSelector(selectSidebarData);
    const dispatch = useDispatch();

    useEffect(() => {
        // getCategories();
        (async () => {
            const response = await fetch('https://api.thecatapi.com/v1/categories');
            const categories = await response.json();

            dispatch({ type: types.SET_CATEGORIES, categories });
        })()
    }, [dispatch]);

    return (
        <div className={styles.container}>
            {categories.map((category) => (
                <NavLink
                    className={(navData) => navData.isActive ? styles.active : ''}
                    key={category.id}
                    to={`/${category.id}`}>
                    {category.name.toUpperCase()}
                </NavLink>
            ))}
        </div>
    )
}

export default Sidebar;
