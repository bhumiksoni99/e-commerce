import { createSelector } from 'reselect';

const selectShop = state => state.shop

export const selectShopData = createSelector(
    [selectShop], 
    (shop) => shop.collections
)

export const selectCollectionForPreview = createSelector(
    [selectShopData],
    (collections) =>collections ? Object.keys(collections).map(key => collections[key]) : []    //converts keys of collections object into an array then maps over that keys array to give the value at that key.
)                                                                             //.map returns an array so converting object to array here

export const selectCollection = collectionUrlParams => 
    createSelector(
        [selectShopData],
        collections => (collections ? collections[collectionUrlParams] : null)
)

