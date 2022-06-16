import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import styles from './index.module.scss';
import types from '../../redux/actionTypes';

import { selectCatsData, selectSidebarData } from '../../redux/selectors';

const Cats = () => {
    const { cats, page, limit } = useSelector(selectCatsData);
    const { isOpened } = useSelector(selectSidebarData);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (cats.length === limit && page > 1) {
            return;
        }
        dispatch({type: types.GET_CATS, id, limit, page});
    }, [dispatch, id, page, limit, cats.length]);

    useEffect(() => {
        dispatch({ type: types.RESET_PAGE });
        dispatch({ type: types.RESET_LIMIT });
        dispatch({ type: types.RESET_CATS });
        if (isOpened) {
            dispatch({ type: types.RESET_IS_OPENED });
        }
    }, [dispatch, id]);

    const loadMore = () => {
        dispatch({ type: types.SET_LIMIT });
        dispatch({ type: types.SET_PAGE });
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {
                    cats.map(cat => (
                        <img key={cat.id} className={styles.cat} src={cat.url} alt="cat" />
                    ))
                }
            </div>
            <button
                className={styles.loadMore}
                onClick={loadMore}
            >Load More</button>
        </div>
    )
}

export default Cats;
