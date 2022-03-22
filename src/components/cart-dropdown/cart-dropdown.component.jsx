import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions'


import {
    CartDropDownContainer,
    EmptyMessage,
    CartItemsDropdown,
    DropDownButtons
} from './cart-dropdown.styles'

const CartDropDown = ({ cartItems, history, dispatch}) => (
    <CartDropDownContainer>
        <CartItemsDropdown>
        {   
            cartItems.length ?
            cartItems.map(cartItem => ( <CartItem key={cartItem.id} item={cartItem} />
            ))
            :
            <EmptyMessage></EmptyMessage>
            }
            </CartItemsDropdown>
        <DropDownButtons onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }}>
            GO TO CHECKOUT
            </DropDownButtons>
    </CartDropDownContainer>
)

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown));