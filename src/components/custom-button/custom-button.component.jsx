import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children , isGoogleSignIn ,inverted, ...otherProps}) => (      //children contains the value given between the CustomButton Tags wherever it is used.
    <button className = {`${inverted ? 'inverted' :''} ${ isGoogleSignIn ? 'google-sign-in' :''} custom-button`}  {...otherProps}>
        {children}
    </button>
)

export default CustomButton