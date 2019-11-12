import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';
import rootReducer from './root.reducer';
import logger from 'redux-logger';
const middleWare = [thunk];

if(process.env.NODE_ENV === 'development'){
    middleWare.push(logger);
};

const store = createStore(rootReducer,applyMiddleware(...middleWare));
const persistor = persistStore(store);

export  {store,persistor};