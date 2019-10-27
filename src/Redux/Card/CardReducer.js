import {CardActionTyps} from './CardActionTypeS';

const INISIAL_STATE={
    Hidden_Show_DW : true
};

const CardReducer=(state =INISIAL_STATE,action)=>{
   switch(action.type){
       case CardActionTyps.HIDDEN_SHOW_CARD_DROPDOWN :
       return {
           ...state,
           Hidden_Show_DW : !state.Hidden_Show_DW
       }
       default :
       return state;
   }
}

export default CardReducer;