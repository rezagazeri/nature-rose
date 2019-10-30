import {CardActionTyps} from './CardActionTypeS';
import CardquantityCalc from '../../Utils/CardquantityCalc';

const INISIAL_STATE={
    Hidden_Show_DW : true,
    Shop_Card_Items :[]
};

const CardReducer=(state =INISIAL_STATE,action)=>{
   switch(action.type){
       case CardActionTyps.HIDDEN_SHOW_CARD_DROPDOWN :
       return {
           ...state,
           Hidden_Show_DW : !state.Hidden_Show_DW
       }
       case CardActionTyps.ADD_TO_SHOP :
       return {
           ...state,
           Shop_Card_Items : CardquantityCalc(state.Shop_Card_Items,action.payload)
       }
       default :
       return state;
   }
}

export default CardReducer;