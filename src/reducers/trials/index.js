import {
    TRIALS,
    TRIALS_ERROR,
    TRIALS_SUCCESS,
    ACTIVE_TRIAL,
    ACTIVE_TRIAL_ERROR,
    ACTIVE_TRIAL_SUCCESS,
} from '../../actions/types';
import createReducer from '../createReducer';

const state = {
    isFetching: false,
    error: false,
    data: {
    }
};

export const trials = createReducer(state, {
    [TRIALS](state, action) {
        return {
            ...state,
            isFetching: true
        }
    },
    [TRIALS_SUCCESS](state, action) {
        return {
            ...state,
            isFetching: false,
            data: action.payload
        }
    },
    [TRIALS_ERROR](state, action) {
        return {
            ...state,
            isFetching: false,
            error: true,
            errorM: action.error
        }
    },
});

export const activeTrial = createReducer(state, {
    [ACTIVE_TRIAL](state, action) {
        return {
            ...state,
            isFetching: true
        }
    },
    [ACTIVE_TRIAL_SUCCESS](state, action) {
        return {
            ...state,
            isFetching: false,
            data: action.payload
        }
    },
    [ACTIVE_TRIAL_ERROR](state, action) {
        return {
            ...state,
            isFetching: false,
            error: true,
            errorM: action.error
        }
    },
});