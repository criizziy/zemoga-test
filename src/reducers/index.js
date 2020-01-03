import {combineReducers} from "redux";
import * as login from './auth/login';
import * as trials from './trials';


export default combineReducers(
    Object.assign(
        login,
        trials,
    )
);
