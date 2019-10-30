import {CardActionTyps} from './CardActionTypeS';

export const CardDropDown = ()=>({
    type : CardActionTyps.HIDDEN_SHOW_CARD_DROPDOWN
});
export const AddCardItem = item =>({
    type : CardActionTyps.ADD_TO_SHOP,
    payload : item
});