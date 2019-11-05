import {CardActionTyps} from './CardActionTypeS';

export const CardDropDown = ()=>({
    type : CardActionTyps.HIDDEN_SHOW_CARD_DROPDOWN
});
export const AddCardItem = item =>({
    type : CardActionTyps.ADD_TO_SHOP,
    payload : item
});
export const AddShopCardquantity = item =>({
   type :CardActionTyps.ADD_SHOP_CARD_QUANTITY ,
   payload : item
});

export const MinusShopCardquantity =item=>({
    type : CardActionTyps.MINUS_SHOP_CARD_QUANTITY,
    payload : item
});
export const RemoveShopItem =item =>({
    type : CardActionTyps.REMOVE_SHOP_ITEM,
    payload : item
});