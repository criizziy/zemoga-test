import axios from 'axios';
import Auth from './auth';
import Rulings from './rulings';
import {user} from "../utils/storage";


axios.defaults.baseURL = '';

const handleRequest = async (request) => {
    const userInfo = await user.get();
    if (userInfo && userInfo.token) {
        request.headers['Authorization'] = `Token ${userInfo.token}`;
    }
    request.headers['Content-Type'] = 'application/json';
    request.headers.Accept = 'application/json';
    return await request;
};


const handleResponseError = (error) => {
    console.log(error);
    return error;
};


axios.interceptors.request.use(handleRequest);


axios.interceptors.response.use(response => {
    console.log('success', response)
    return response;
}, async (error) => {
    await handleResponseError(error);
    throw error;
});

export const auth = new Auth();
export const rulings = new Rulings();



