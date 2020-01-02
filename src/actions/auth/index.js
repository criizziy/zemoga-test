import {
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    LOGIN,
} from '../types';
import {loginService} from '../../services/auth';
import {user} from '../../utils/storage';

export const actGetUser = () => async dispatch => {
    try {

        dispatch({
            type: LOGIN
        });
       
        const res = await user.get(); 
        console.log(res)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res,
        });

    } catch (e) {
        dispatch({
            type: LOGIN_ERROR,
            error: e
        })
    }
};

export const actLogin = (data) => async dispatch => {
    try {
        dispatch({
            type: LOGIN
        });

        const res = await loginService(data);
        user.set(res.data);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: LOGIN_ERROR,
            error: e
        })
    }
};
