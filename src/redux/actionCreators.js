import types from "./actionTypes";

const createAction = (actionType) => (payload) => {
    if (!payload) payload = {}; 

    return ({
        type: actionType,
        payload,
    });
};

const addAnswer = createAction(types.ADD_ANSWER);
const resetAnswers = createAction(types.RESET_ANSWERS);
const openAlert = createAction(types.OPEN_ALERT);
const closeAlert = createAction(types.CLOSE_ALERT);

export {
    addAnswer,
    resetAnswers,
    openAlert,
    closeAlert,
};