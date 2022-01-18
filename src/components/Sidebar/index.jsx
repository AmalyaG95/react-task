import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from './index.module.scss';
import types from '../../redux/actionTypes';
import { selectSidebarData } from '../../redux/selectors';
// import { getCategories } from '../../redux/actions';

const Sidebar = () => {
    const { categories } = useSelector(selectSidebarData);
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
