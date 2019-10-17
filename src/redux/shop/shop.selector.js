import { createSelector } from 'reselect';

const selectShop = state => state.shop

export const selectShopData = createSelector(
    [selectShop], 
    (shop) => shop.collections
)

export const selectCollectionForPreview = createSelector(
    [selectShopData],
    (collections) => Object.keys(collections).map(key => collections[key])    //converts keys fo collections object into an array then maps over that keys array to give the value at that key.
)

export const selectCollection = collectionUrlParams => 
    createSelector(
        [selectShopData],
        collections => collections[collectionUrlParams]
)

