import {takeLatest,call,put} from 'redux-saga/effects';
import {ShopActionTyps} from './Shop.typs';
import {
    FailDataRecived,
    SuccessDataInShopReducer
} from './Shop.action';
import {firestore,convertSnapshotCollectionToObject} from '../../firebase/firebase.utils';

function* fetchShopDataCollection(){
   try{
        const collectionRefrence = firestore.collection('collections');
        const snapshot = yield collectionRefrence.get();
        const snapshotCollections = yield call(convertSnapshotCollectionToObject,snapshot);
       yield put(SuccessDataInShopReducer(snapshotCollections))

    }catch(error){
       yield put(FailDataRecived(error.message));
    }

}
export function* StartDataFetching (){
    yield takeLatest(ShopActionTyps.FETCH_DATA_START,fetchShopDataCollection);
}
