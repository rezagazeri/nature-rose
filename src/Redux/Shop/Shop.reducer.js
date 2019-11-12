import {ShopActionTyps} from './Shop.typs';

const INITIAL_STATE ={
    collections : null,
    isLoading : false,
    erorr :undefined
};

const ShopReducer = (state=INITIAL_STATE,action)=>{
   switch (action.type){
       case ShopActionTyps.FETCH_DATA_SUCCESS:
       return {
           ...state,
           collections : action.payload,
           isLoading :false
       }
       case ShopActionTyps.FETCH_DATA_START:
       return {
           ...state,
           isLoading:true
       }
       case ShopActionTyps.FETCH_DATA_FAILUER:
       return {
           ...state,
           erorr : action.payload,
           isLoading :false
       }
       default:
       return state;
   }
};
 export default ShopReducer;