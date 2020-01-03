import {trials} from '../../provider';

export const getTrials = () => {
    return new Promise(async (resolve,reject) =>{
       try{
            resolve(await trials.get_list())
       }catch (e) {
           reject(e);
       }
    });
};

export const getActiveTrial = () => {
    return new Promise(async (resolve,reject) =>{
       try{
            resolve(await trials.getActiveTrial())
       }catch (e) {
            reject(e);
       }
    });
};

export const updateTrial = (id, data) => {
    return new Promise(async (resolve,reject) =>{
       try{
            resolve(await trials.updateTrial(id, data));
       }catch (e) {
           reject(e);
       }
    });
};

