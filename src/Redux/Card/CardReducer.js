import {CardActionTyps} from './CardActionTypeS';
import {
    CardquantityCalc
    ,CardquantityPlus,
    CardquantityMinus}  from '../../Utils/CardquantityCalc';

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
       case CardActionTyps.ADD_SHOP_CARD_QUANTITY: 
       return {
           ...state,
           Shop_Card_Items :CardquantityMinus(
               state.Shop_Card_Items,action.payload)
       }
       case CardActionTyps.MINUS_SHOP_CARD_QUANTITY: 
       return {
            ...state,
            Shop_Card_Items :CardquantityPlus(
                state.Shop_Card_Items,action.payload)
       }
       case  CardActionTyps.REMOVE_SHOP_ITEM :
       return {
           ...state ,
            Shop_Card_Items :state.Shop_Card_Items.filter(item=>
            item.id !== action.payload.id
            )
       }
       default :
       return state;
   }
}

export default CardReducer;