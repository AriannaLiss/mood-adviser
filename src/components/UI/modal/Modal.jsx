import React from 'react';
import cl from './Modal.module.css';

const Modal = ({title, children, isShow, close}) => {
    return (
        <div className={isShow?cl.container:cl.hide} onClick={close}>
            <div className={cl.window} onClick={(e)=>{e.stopPropagation()}}>
                <h2 className={cl.title}>{title}</h2>
                <div className={cl.body}>
                    {children}
                </div>
            </div> 
        </div>
    );
};

export default Modal;