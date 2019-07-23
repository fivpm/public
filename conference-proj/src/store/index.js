import { createStore } from 'redux';

import { rootReducer } from './reducers'

export const initialState = {
    clientFormLocation: "",
    clientFormDetails: "",
    clientFormItems: [],
    counter: 0
}

const store = createStore(rootReducer);

export default store;