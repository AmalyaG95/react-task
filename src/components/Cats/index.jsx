import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import styles from './index.module.scss';
import { selectCatsData, selectSidebarData } from '../../redux/selectors';
import { getCatsRequest, resetCats, resetIsOpen, resetLimit, resetPage, setLimit, setPage } from '../../redux/actionCreators';

const Cats = () => {
    const { cats, page, limit } = useSelector(selectCatsData);
    const { isOpened } = useSelector(selectSidebarData);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (cats.length === limit && page > 1) {
            return;
        }
        dispatch(getCatsRequest({id, limit, page}));
    }, [dispatch, id, page, limit, cats.length]);

    useEffect(() => {
        dispatch(resetPage());
        dispatch(resetLimit());
        dispatch(resetCats());
        if (isOpened) {
            dispatch(resetIsOpen());
        }
    }, [dispatch, id]);

    const loadMore = () => {
        dispatch(setLimit());
        dispatch(setPage());
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
