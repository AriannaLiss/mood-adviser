import React from 'react';
import cl from './VerifiedInput.module.css'

const VerifiedInput = ({errorMessage, isError, ...props}) => {
    return (
        <>                   
            <input 
                className={isError ? cl.highlight : ''}
                {...props}
            />
            <div className={isError ? cl.errorMessage : 'hide'}>{errorMessage}</div>
        </>
    );
};

export default VerifiedInput;