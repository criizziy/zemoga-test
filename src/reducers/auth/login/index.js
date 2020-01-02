import {LOGIN, LOGIN_ERROR, LOGIN_SUCCESS} from '../../../actions/types';
import createReducer from '../../createReducer';

const state = {
    isFetching: true,
    error: false,
    user: null
};

export const login = createReducer(state, {
    [LOGIN](state, action) {
        return {
            ...state,
            isFetching: true
        }
    },
    [LOGIN_SUCCESS](state, action) {
        return {
            ...state,
            isFetching: false,
            user: action.payload
        }
    },
    [LOGIN_ERROR](state, action) {
        return {
            ...state,
            isFetching: false,
            error: true,
            errorM: action.error
        }
    },
});
