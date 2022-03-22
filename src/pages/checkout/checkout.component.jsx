import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import  CheckOutItem  from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { 
    selectCartItems, 
    selectCartTotal 
    } from '../../redux/cart/cart.selectors';


import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    CheckoutHeaderBlock,
    TotalContainer,
    WarningContainer
} from './checkout.styles.jsx';

const CheckoutPage = ({cartItems, total}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <CheckoutHeaderBlock>
                <span>Product</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Description</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Quantity</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Price</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Remove</span>
            </CheckoutHeaderBlock>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem => (
                <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
            ))}
        <TotalContainer>
            <span>TOTAL:${total}</span>
        </TotalContainer>
        <WarningContainer>*Please use the following test credit card for payments*
        <br/>
        4242 4242 4242 4242 - Exp: 01/23 - CVV 123
        </WarningContainer>
        <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);