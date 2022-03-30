import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import  CartIcon  from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import { ReactComponent as Logo } from '../../assets/svg/header_logo_crown.svg';

import { 
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
    } from './header.styles.jsx';

const Header = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const hidden = useSelector(selectCartHidden);
    const signOutUser = dispatch(signOutStart());
    
    return(
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
{/* using ternary operator to render div if true or a Link if false */}
            {
                currentUser ? (
                <OptionLink as='div'
                onClick={signOutUser}
                > 
                SIGN OUT</OptionLink>
                ) : (
                <OptionLink to='/signin'>SIGN IN
                </OptionLink>
            )}
        <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropDown />}
    </HeaderContainer>
)
}


export default Header;