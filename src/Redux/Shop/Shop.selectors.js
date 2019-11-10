import {createSelector} from 'reselect';
 
const selectshop = state=>state.shop;

export const selectshopCollection = createSelector(
    [selectshop],
    shop =>shop.collections
);
export const selectCollectionsForPreview = createSelector(
    [selectshopCollection],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
  );

  export const selectCollectionItem = collectionUrlParam =>
  createSelector(
    [selectshopCollection],
    collections => (collections? collections[collectionUrlParam]:null)
  );


