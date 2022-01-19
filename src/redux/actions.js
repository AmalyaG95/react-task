import types from "./actionTypes";

const getCategories = () => async (dispatch) => {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/categories');
        const categories = await response.json();

        dispatch({ type: types.SET_CATEGORIES, categories });
    } catch (e) {
        console.log(e);
    }


};

const getCatsByCategory = (id) => async (dispatch) => {
    try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${id}`);
        const cats = await response.json();

        dispatch({ type: types.SET_CATS, cats });
    } catch (e) {
        console.log(e);
    }

};

export {
    getCategories,
    getCatsByCategory,
}