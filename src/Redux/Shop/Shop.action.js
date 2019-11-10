import {ShopActionTyps} from './Shop.typs';
export const UpdateDataInShopReducer = collections=>({
    type :ShopActionTyps.UPDATE_DATA_FROM_FIREBASE,
    payload : collections
});