import types from "./actionTypes";

const createAction = (actionType) => (payload) => {
    if (!payload) payload = {}; 

    return ({
        type: actionType,
        payload,
    });
};

// Sidebar
const getCategoriesRequest = createAction(types.GET_CATEGORIES_REQUEST);
const setCategories = createAction(types.SET_CATEGORIES);
const setIsOpen = createAction(types.SET_IS_OPENED);
const resetIsOpen = createAction(types.RESET_IS_OPENED);

// Cats
const getCatsRequest = createAction(types.GET_CATS_REQUEST);
const setCats = createAction(types.SET_CATS);
const resetCats = createAction(types.RESET_CATS);
const setPage = createAction(types.SET_PAGE);
const resetPage = createAction(types.RESET_PAGE);
const setLimit = createAction(types.SET_LIMIT);
const resetLimit = createAction(types.RESET_LIMIT);

// Answers
const setAnswer = createAction(types.SET_ANSWER);
const addAnswer = createAction(types.ADD_ANSWER);
const resetAnswers = createAction(types.RESET_ANSWERS);

export {
    getCategoriesRequest,
    setCategories,
    setIsOpen,
    resetIsOpen,

    getCatsRequest,
    setCats,
    resetCats,
    setPage,
    resetPage,
    setLimit,
    resetLimit,

    setAnswer,
    addAnswer,
    resetAnswers,
};