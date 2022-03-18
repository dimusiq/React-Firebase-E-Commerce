import React from 'react';

// import './custom-button.styles.scss';

import { 
    CustomButtonContainer,
} from './custom-button.styles.jsx';


//conditionally render 'google-sign-in' if //isGoogleSignIn is true otherwise render empty string //and 'custom-button'

const CustomButton = ({children, ...props}) => (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;