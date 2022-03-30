import React from 'react';

// import './cart-item-styles.scss';
import { CartItemContainer, CartItemName,CartItemDetails, CartItemImage } from './cart-item.styles';
const CartItem = ({ item: {imageUrl, price, name, quantity}}) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item'></CartItemImage>
        <CartItemDetails>
            <CartItemName>{name}</CartItemName>
            <CartItemName>{quantity} x ${price}</CartItemName>

        </CartItemDetails>
    </CartItemContainer>
)

export default CartItem;