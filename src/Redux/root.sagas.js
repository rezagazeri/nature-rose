import {all,call} from 'redux-saga/effects';
import {StartDataFetching} from './Shop/Shop.saga';

export function* rootSagas(){
    yield all([
        call(StartDataFetching)
    ]);
};