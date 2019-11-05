import {createSelector} from 'reselect';

const SelectCard  = state=>state.card;

export const selectShopCardItems = createSelector(
    [SelectCard],
    card=>card.Shop_Card_Items
);


export const selectShopCardquantity =createSelector(
[selectShopCardItems],
Shop_Card_Items=>Shop_Card_Items.reduce(
    (totalQuantity,item)=>totalQuantity + item.quantity
    ,0)
);

export const selectHiddenShowDW = createSelector(
    [SelectCard],
    card=>card.Hidden_Show_DW
);
export const selectTotalCalc =createSelector(
    [selectShopCardItems],
    Shop_Card_Items  => Shop_Card_Items.reduce(
        (totalPrice,item)=>(totalPrice + (item.quantity * item.price)),0)
    );