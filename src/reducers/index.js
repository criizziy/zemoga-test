import {combineReducers} from "redux";
import * as login from './auth/login';
import * as rulings from './rulings';


export default combineReducers(
    Object.assign(
        login,
        rulings,
    )
);
