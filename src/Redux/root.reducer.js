import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import CardReducer from './Card/CardReducer';

export default combineReducers({
    user : userReducer,
    card : CardReducer
});


