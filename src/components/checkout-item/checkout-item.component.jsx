import React from 'react';

import './checkout-item.styles.scss';

import { removeItem } from '../../redux/cart/cart.actions';

import {connect} from 'react-redux';

import { decreaseQuantity } from '../../redux/cart/cart.actions';
import { addItem } from '../../redux/cart/cart.actions';


const CheckoutItem = ({cartItem,removeItem,addItem,decreaseQuantity}) => {
    const { imageUrl , name,price,quantity} = cartItem
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"></img>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className="arrow" onClick={() => decreaseQuantity(cartItem)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={ ()=> addItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>${price}</span>
        <div className='remove-button' onClick ={ () => removeItem(cartItem)}>&#10005;</div>
    </div>
)
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    decreaseQuantity: item => dispatch(decreaseQuantity(item))
})


export default connect(null,mapDispatchToProps)(CheckoutItem)