import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions'


import {
    CartDropDownContainer,
    EmptyMessage,
    CartItemsDropdown,
    DropDownButtons
} from './cart-dropdown.styles'

const CartDropDown = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const cartItems = useSelector(selectCartItems);
    return (
    <CartDropDownContainer>
        <CartItemsDropdown>
        {   
            cartItems.length ?
            cartItems.map(cartItem => ( <CartItem key={cartItem.id} item={cartItem} />
            ))
            :
            <EmptyMessage>Cart is Empty</EmptyMessage>
            }
            </CartItemsDropdown>
        <DropDownButtons onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }}>
            GO TO CHECKOUT
            </DropDownButtons>
    </CartDropDownContainer>
)}

export default CartDropDown;