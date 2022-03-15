import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KdbMHEAGaFMxl21kayImv8oe2Ty62LnmtnPoSxvpUHhw0YsjZ3QA28xOOKsUZsA3HCRpIa0EnRk7qDGixdpRVtv00GjdwtkqO'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='React E-Commerce'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`You total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;