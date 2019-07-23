import { initialState } from '../';

import * as types from '../actions/types';

export const rootReducer = (state = initialState, action) => {
    const updatedState = state;
    console.log(state);
    switch (action.type) {
        case types.CHANGE_A:
            return {
                ...state,
                clientFormLocation: action.payload.location,
                clientFormDetails: action.payload.details,
                clientFormItems: state.clientFormItems.concat(action.payload.location + ": " + action.payload.details),
                counter: state.counter + 1
            }

        case types.REMOVE_CONF:
                console.log(action.payload.index,updatedState.clientFormItems);
             updatedState.clientFormItems.splice(action.payload.index,1)
          return {  
            clientFormItems: [ 
                ...updatedState.clientFormItems
            ]
          }      
            break;

        default:
            console.log("No action taken!", action);
            return state;
    }
}