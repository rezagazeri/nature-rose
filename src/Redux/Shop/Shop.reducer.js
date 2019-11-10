import {ShopActionTyps} from './Shop.typs';

const INITIAL_STATE ={
    collections : null
};

const ShopReducer = (state=INITIAL_STATE,action)=>{
   switch (action.type){
       case ShopActionTyps.UPDATE_DATA_FROM_FIREBASE :
       return {
           ...state,
           collections : action.payload
       }
       default:
       return state;
   }
};
 export default ShopReducer;