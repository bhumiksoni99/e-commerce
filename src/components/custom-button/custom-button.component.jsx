import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children , isGoogleSignIn , ...otherProps}) => (      //children contains the value given between the CustomButton Tags wherever it is used.
    <button className = {`${ isGoogleSignIn ? 'google-sign-in' :''} custom-button`}  {...otherProps}>
        {children}
    </button>
)

export default CustomButton