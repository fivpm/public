import * as types from './types';

export const modifyA = (newValue) => {
    return {
        type: types.CHANGE_A,
        payload: newValue
    }
};

export const removeConf = (index) => {
    return {
        type: types.REMOVE_CONF,
        payload: {
            index: index
        }
    }
};