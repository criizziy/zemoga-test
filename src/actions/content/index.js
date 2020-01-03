import {
    TRIALS,
    TRIALS_ERROR,
    TRIALS_SUCCESS,
    ACTIVE_TRIAL,
    ACTIVE_TRIAL_ERROR,
    ACTIVE_TRIAL_SUCCESS,
} from '../types';
import {
    getTrials,
    updateTrial,
    getActiveTrial
} from '../../services/trials';


export const actGetActiveTrial = () => async dispatch => {
    try {
        dispatch({
            type: ACTIVE_TRIAL
        });

        const res = await getActiveTrial(); 
        
        dispatch({
            type: ACTIVE_TRIAL_SUCCESS,
            payload: res
        });
    } catch (e) {
        dispatch({
            type: ACTIVE_TRIAL_ERROR,
            error: e
        })
    }
};


export const actGetTrials = () => async dispatch => {
    try {
        dispatch({
            type: TRIALS
        });
        dispatch({
            type: ACTIVE_TRIAL
        });

        const res = await getTrials(); 
        const a = await getActiveTrial(); 

        dispatch({
            type: TRIALS_SUCCESS,
            payload: res
        });
        dispatch({
            type: ACTIVE_TRIAL_SUCCESS,
            payload: a
        });
        
    } catch (e) {
        dispatch({
            type: TRIALS_ERROR,
            error: e
        })
    }
};

export const actUpdateTrial= (id, data) => async dispatch => {
    try {
        dispatch({
            type: ACTIVE_TRIAL
        });

        await updateTrial(id, data); 
        const res = await updateTrial(id, data);

        dispatch({
            type: ACTIVE_TRIAL_SUCCESS,
            payload: res
        });

    } catch (e) {
        dispatch({
            type: ACTIVE_TRIAL_ERROR,
            error: e
        })
    }
};