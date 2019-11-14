import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore} from 'redux-persist';
import rootReducer from './root.reducer';
import {rootSagas} from './root.sagas';
import logger from 'redux-logger';
const sagaMiddleware = createSagaMiddleware();
const middleWare = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middleWare.push(logger);
};

const store = createStore(rootReducer,applyMiddleware(...middleWare));
sagaMiddleware.run(rootSagas);
const persistor = persistStore(store);

export  {store,persistor};