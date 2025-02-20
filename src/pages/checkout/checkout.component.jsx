import React from 'react';
import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems,total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />))
        }
        <div className="total">TOTAL: ${total}</div>
        <div className="warning">
            *Use the following details for payment* 
            <br/>
            4242 4242 4242 4242 
            01/20  CVV : 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    total:selectCartTotal(state)

})


export default connect(mapStateToProps)(CheckoutPage)    // no argument is provided therefore dispatch will be 