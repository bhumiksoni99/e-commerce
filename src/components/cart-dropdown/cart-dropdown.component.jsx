import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems,history,dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items" >
            {
                cartItems.length ? 
                cartItems.map(cartItem => <CartItem key ={cartItem.id} item={cartItem}/>) 
                :
                <span className="empty-message">Your cart is Empty.</span>
            }
        </div>
        <CustomButton onClick = {() => {history.push('/checkout')
            dispatch(toggleCartHidden())    
         }} 
    >GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown))   //connect automatically passes the dispatch to the function if no second argument is given along with mapStateToProps