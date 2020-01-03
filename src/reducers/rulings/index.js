import {
    RULINGS,
    RULINGS_SUCCESS,
    RULINGS_ERROR,
} from '../../actions/types';
import createReducer from '../createReducer';

const state = {
    isFetching: false,
    error: false,
    data: {
    }
};

export const rulings = createReducer(state, {
    [RULINGS](state, action) {
        return {
            ...state,
            isFetching: true
        }
    },
    [RULINGS_SUCCESS](state, action) {
        return {
            ...state,
            isFetching: false,
            data: action.payload
        }
    },
    [RULINGS_ERROR](state, action) {
        return {
            ...state,
            isFetching: false,
            error: true,
            errorM: action.error
        }
    },
});
