import React from 'react';

import './custom-button.styles.scss';

//conditionally render 'google-sign-in' if //isGoogleSignIn is true otherwise render empty string //and 'custom-button'

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
    {...otherProps}
    >
    {children} 
    </button>
);

export default CustomButton;