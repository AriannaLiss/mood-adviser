import React from 'react';
import cl from './MyButton.module.css'

const MyButton = ({value, type='button', isReject=false, callback}) => {
    return (
        <input className={isReject?cl.button+' '+cl.reject:cl.button} type={type} value={value} onClick={callback}/>
    );
};

export default MyButton