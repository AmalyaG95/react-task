import types from "./actionTypes";

const getCategories = () => async (dispatch) => {
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
};

const getCatsByCategory = (id, limit, page) => async (dispatch) => {
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

};

export {
    getCategories,
    getCatsByCategory,
}