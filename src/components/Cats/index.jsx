import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import styles from './index.module.scss';
import types from '../../redux/actionTypes';
import { getCatsByCategory } from '../../redux/actions';

import { selectCatsData } from '../../redux/selectors';

const Cats = () => {
    const { cats, page } = useSelector(selectCatsData);
    const { id } = useParams();
    const dispatch = useDispatch();

    const loadMore = () => {
        dispatch({ type: types.LOAD_CATS, cats });
        dispatch({ type: types.SET_PAGE });

    }

    useEffect(() => {
        // getCatsByCategory(id);
        (async () => {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${id}`);
            const cats = await response.json();

            dispatch({ type: types.SET_CATS, cats })
        })()

        return () => {
            dispatch({ type: types.RESET_PAGE });
            dispatch({ type: types.RESET_CATS });
        }
    }, [dispatch, id, page]);

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
