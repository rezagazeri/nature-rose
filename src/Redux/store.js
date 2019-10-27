import {createStore,applyMiddleware} from 'redux';
import rootReducer from './root.reducer';
import logger from 'redux-logger';
const middleWare = [logger];

const store = createStore(rootReducer,applyMiddleware(...middleWare));

export default store;