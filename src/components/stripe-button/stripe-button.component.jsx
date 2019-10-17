import React from 'react';

import  StripeCheckout  from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100;          //it needs price in cents
    const publishableKey = 'pk_test_LK8V8IeSuOUh7eB3DMZDIZrj008MD06sAr'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="Crwn Fashion"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total amount is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />

    )
} 
//4242 4242 4242 4242
//01/20 123
export default StripeCheckoutButton