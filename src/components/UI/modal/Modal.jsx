import React from 'react';
import cl from './Modal.module.css';

const Modal = ({children, isShow, close}) => {
    return (
        <div className={isShow?cl.container:cl.hide} onClick={close}>
            <div className={cl.window} onClick={(e)=>{e.stopPropagation()}}>
                {children}
            </div> 
        </div>
    );
};

export default Modal;