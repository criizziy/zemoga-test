import {
    RULINGS,
    RULINGS_ERROR,
    RULINGS_SUCCESS,
} from '../types';
import {
    getRulings,
    updateRuling,
} from '../../services/rulings';



export const actGetRulings = () => async dispatch => {
    try {
        dispatch({
            type: RULINGS
        });

        const res = await getRulings(); 
        
        dispatch({
            type: RULINGS_SUCCESS,
            payload: res
        });
    } catch (e) {
        dispatch({
            type: RULINGS_ERROR,
            error: e
        })
    }
};

export const actUpdateRuling = (id, data) => async dispatch => {
    try {
        dispatch({
            type: RULINGS
        });

        await updateRuling(id, data); 
        const res = await getRulings(); 

        dispatch({
            type: RULINGS_SUCCESS,
            payload: res.data
        });

    } catch (e) {
        dispatch({
            type: RULINGS_ERROR,
            error: e
        })
    }
};