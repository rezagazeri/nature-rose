import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import  storage  from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import CardReducer from './Card/CardReducer';
import ShopReducer from './Shop/Shop.reducer';

const ConfigReducer = {
    key : 'root',
    storage,
    whitelist : ['card']
};
const rootReducer =combineReducers({
    user : userReducer,
    card : CardReducer,
    shop : ShopReducer
});


export default  persistReducer(ConfigReducer,rootReducer);


