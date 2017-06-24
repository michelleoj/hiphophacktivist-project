import {
    SOME_ACTION,
} from './actions';

const mainReducer = (state, action) => {
    switch(action.type) {
        case SOME_ACTION:
            return {
                ...state,
                key: action.value,
            };
        default:
            return state;
    };
};

export default mainReducer;

