import {RECOVERY,RECOVERY_SUCCESS, RECOVERY_ERROR} from '../../../actions/types';
import createReducer from '../../createReducer';

const state = {
    isFetching: false,
    error: false,
    user: {
        user_id:0,
        roles:[],
        token_type:'',
        expires_in:0,
        access_token:'',
        refresh_token:''
    }
};

export const recovery = createReducer(state, {
    [RECOVERY](state) {
        return {
            ...state,
            isFetching: true
        }
    },
    [RECOVERY_SUCCESS](state) {
        return {
            ...state,
            isFetching: false,
        }
    },
    [RECOVERY_ERROR](state, action) {
        return {
            ...state,
            isFetching: false,
            error: true,
            errorM: action.error
        }
    },
});
