import { AsyncStorage } from 'AsyncStorage';

class User {
    get() {
        return new Promise(async (resolve, reject) => {
            try {
                const value = await AsyncStorage.getItem('user');
                if (typeof value !== "undefined" && value !== null) {
                    resolve(JSON.parse(value))
                } else {
                    resolve(null);
                }
            } catch (e) {
                reject({code: '12', message: 'No pudimos obtener la sesión :( reinicia el app', e: e});
            }
        })
    }

    set(data) {
        return new Promise(async (resolve, reject) => {
            try {
                await AsyncStorage.setItem('user', JSON.stringify(data))
            } catch (e) {
                reject({code: '13', message: 'No pudimos guardar información del Onboarding', e: e});
            }
        })
    }
    clear(){
        return new Promise(async (resolve,reject) =>{
            try{
                await AsyncStorage.clear();
            }catch (e) {
                reject({code: '14', message: 'No pudimos cerrar la sesión', e: e});
            }
        })
    }
}

class Storage {
    get(name) {
        return new Promise(async (resolve, reject) => {
            try {
                const value = await AsyncStorage.getItem(name);
                if (typeof value !== "undefined" && value !== null) {
                    resolve(JSON.parse(value))
                } else {
                    resolve(null);
                }
            } catch (e) {
                reject({code: '12', message: 'error', e: e});
            }
        })
    }

    set(name, data) {
        return new Promise(async (resolve, reject) => {
            try {
                await AsyncStorage.setItem(name, JSON.stringify(data))
            } catch (e) {
                reject({code: '13', message: 'error', e: e});
            }
        })
    }
    clear(){
        return new Promise(async (resolve,reject) =>{
            try{
                await AsyncStorage.clear();
            }catch (e) {
                reject({code: '14', message: 'error', e: e});
            }
        })
    }
}


export const user = new User();
export const storage = new Storage();
