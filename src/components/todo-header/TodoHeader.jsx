import React from 'react';
import DateBlock from '../UI/date/DateBlock';
import cl from './TodoHeader.module.css'

const TodoHeader = () => {
    return (
        <div className={cl.container}>
            <DateBlock/>
        </div>
    );
};

export default TodoHeader;