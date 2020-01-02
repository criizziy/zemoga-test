import {rulings} from '../../provider';

export const getRulings = () => {
    return new Promise(async (resolve,reject) =>{
       try{
            resolve(await rulings.get_list());
       }catch (e) {
           reject(e);
       }
    });
};

export const updateRuling = (id, data) => {
    return new Promise(async (resolve,reject) =>{
       try{
            resolve(await rulings.update_ruling(id, data));
       }catch (e) {
           reject(e);
       }
    });
};

