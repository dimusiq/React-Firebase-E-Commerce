import React from 'react';
import { useDispatch } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer

} from './checkout-item.styles'

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const dispatch = useDispatch();
    const clearItemWithClickHandler = (item) => dispatch(clearItemFromCart(item))
    const addItemWithClickHandler = (item) => dispatch(addItem(item))
    const removeItemWithClickHandler = (item) => dispatch(removeItem(item))


    return(
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt='item' />
        </ImageContainer>
        <TextContainer>{name}</TextContainer>
        <QuantityContainer>
            <div onClick={() => removeItemWithClickHandler(cartItem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div  onClick={() => addItemWithClickHandler(cartItem)}>&#10095;</div>
            </QuantityContainer>
        <TextContainer>{price}</TextContainer>
        <RemoveButtonContainer onClick={()=> clearItemWithClickHandler(cartItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
)}

export default CheckoutItem;