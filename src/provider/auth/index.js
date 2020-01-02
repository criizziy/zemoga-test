import axios from 'axios';

class Auth {
    login(data) {
        return axios({
            method: 'post',
            url: 'login-w',
            data: data,
        })
    }

    recovery(email){
        return axios({
            method: 'post',
            url:'api/user/recovery-password',
            data:{
                email
            }
        })
    }
}

export default Auth;
