import {ShopActionTyps} from './Shop.typs';

 export const SuccessDataInShopReducer = collections=>({
    type :ShopActionTyps.FETCH_DATA_SUCCESS,
    payload : collections
});
 export const FailDataRecived = error =>({
    type :ShopActionTyps.FETCH_DATA_FAILUER,
    payload : error
});
 export const StartDataFetching = ()=>({
    type :ShopActionTyps.FETCH_DATA_START,
});

//handle fetch data from database (firebase)
