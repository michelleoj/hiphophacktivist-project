import {
    FETCH_SHELTERS,
    RECEIVE_SHELTERS,
} from './actions';

const initState = {
    shelters: null,
}

const mainReducer = (state = initState, action) => {
    switch(action.type) {
        case RECEIVE_SHELTERS:
            return {
                ...state,
                shelters: action.shelters,
            };
        default:
            return state;
    };
};

export default mainReducer;

