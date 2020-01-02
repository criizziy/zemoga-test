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

export const turns = createReducer(state, {
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


export const atTurns = createReducer(state, {
    [AT_TURNS](state, action) {
        return {
            ...state,
            isFetching: true
        }
    },
    [AT_TURNS_SUCCESS](state, action) {
        return {
            ...state,
            isFetching: false,
            data: action.payload
        }
    },
    [AT_TURNS_ERROR](state, action) {
        return {
            ...state,
            isFetching: false,
            error: true,
            errorM: action.error
        }
    },
});