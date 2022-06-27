import types from '../actionTypes';

const initialState = {
    answer: {},
    answers: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ANSWER: {
            return {
                ...state,
                answer: action.payload,
            }
        }
        case types.ADD_ANSWER: {
            let answersCopy = state.answers;

            const answer = answersCopy.find(answer => (answer.questionId === action.payload.questionId)); 

            if (answer) {
                answersCopy = answersCopy.map(answer => {
                    if (answer.questionId === action.payload.questionId) {
                        return {
                            ...action.payload,
                        }
                    } else {
                        return answer;
                    }                    
                })
            } else {
                answersCopy.push(action.payload);
            }            

            return {
                ...state,
                // answer: '',
                answers: answersCopy,
            }
        }

        case types.RESET_ANSWERS: {
            return {
                answer: {},
                answers: [],
            };
        }
        
        default: return state;
    }
}

export default reducer;