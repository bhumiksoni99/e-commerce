import { createSelector } from 'reselect';

const selectCart = state => state.cart 

export const selectCartItems = createSelector(
    [selectCart] ,
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((totalItems , cartItem) => totalItems + cartItem.quantity , 0 )    //0 is the initial value of totalItems
)

export const selectCartHidden = createSelector(
    [selectCart] ,
    (cart) => cart.hidden
)

export const selectCartTotal = createSelector( 
    [selectCartItems] ,
    (cartItems) => cartItems.reduce((totalprice , cartItem) => totalprice + cartItem.quantity * cartItem.price , 0 ) 

)