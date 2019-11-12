import {ShopActionTyps} from './Shop.typs';
import {firestore,convertSnapshotCollectionToObject}  from '../../firebase/firebase.utils';

 const SuccessDataInShopReducer = collections=>({
    type :ShopActionTyps.FETCH_DATA_SUCCESS,
    payload : collections
});
 const FailDataRecived = error =>({
    type :ShopActionTyps.FETCH_DATA_FAILUER,
    payload : error
});
 const StartDataFetching = ()=>({
    type :ShopActionTyps.FETCH_DATA_START,
});

//handle fetch data from database (firebase)

export const FetchShopDataFromServer = ()=>{
    return dispatch=>{
        const collectionRefrence = firestore.collection('collections');
        dispatch(StartDataFetching());
        collectionRefrence.get()
        .then(snapshot =>{
            const collections = convertSnapshotCollectionToObject(snapshot);
            dispatch(SuccessDataInShopReducer(collections));
        })
        .catch(erorr=>{
            dispatch(FailDataRecived(erorr.message));
        })
    }
}
