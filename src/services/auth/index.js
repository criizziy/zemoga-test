import {auth} from '../../provider';

export const loginService = (data) => {
    return new Promise(async (resolve,reject) =>{
       try{
        resolve(await auth.login(data));
       }catch (e) {
           reject(e);
       }
    });
};

export const recoveryService = (email) =>{
    return new Promise(async (resolve,reject)=>{
        try{
            resolve(await auth.recovery(email));
        }
        catch (e) {
            reject(e);
        }
    })
};
