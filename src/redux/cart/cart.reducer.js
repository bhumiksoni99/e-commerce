import { CartActionTypes}  from './cart.types';
import { addItemToCart } from './cart.utils';
import { removeItemFromCart} from './cart.utils';
import { decreaseQuantityOfItem } from './cart.utils';

const INITIAL_STATE = {
    hidden:true,
    cartItems:[]
}

const cartReducer = (state = INITIAL_STATE , action ) => {
    switch(action.type) {
        case(CartActionTypes.TOGGLE_CART_HIDDEN) :
        return {
            ...state,
            hidden:!state.hidden
        }
        case(CartActionTypes.ADD_ITEMS) :
        return {
            ...state ,
            cartItems: addItemToCart(state.cartItems , action.payload)
        }
        case(CartActionTypes.REMOVE_ITEMS):
        return {
            ...state,
            cartItems:removeItemFromCart(state.cartItems , action.payload)
        }
        case(CartActionTypes.DECREASE_QUANTITY):
        return {
            ...state,
            cartItems:decreaseQuantityOfItem(state.cartItems , action.payload)
        }
        default:
            return state
    }
}

export default cartReducer