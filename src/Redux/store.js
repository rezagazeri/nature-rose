import {createStore,applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import rootReducer from './root.reducer';
import logger from 'redux-logger';
const middleWare = [logger];

const store = createStore(rootReducer,applyMiddleware(...middleWare));
const persistor = persistStore(store);

export  {store,persistor};