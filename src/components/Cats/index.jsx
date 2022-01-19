import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import styles from './index.module.scss';
import types from '../../redux/actionTypes';
// import { getCatsByCategory } from '../../redux/actions';

import { selectCatsData, selectSidebarData } from '../../redux/selectors';

const Cats = () => {
    const { cats, page, limit } = useSelector(selectCatsData);
    const { isOpened } = useSelector(selectSidebarData);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        // getCatsByCategory(id);        
        if (cats.length === limit && page > 1) {
            return;
        }

        (async () => {
            try {
                const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&category_ids=${id}`);
                const catsData = await response.json();
                if (catsData.error) {
                    throw catsData.error;
                }

                dispatch({ type: types.SET_CATS, cats: catsData });

            } catch (e) {
                console.log(e);
            }

        })()
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
