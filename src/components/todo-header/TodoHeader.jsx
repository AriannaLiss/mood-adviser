import React from 'react';
import DateBlock from '../UI/date/DateBlock';
import cl from './TodoHeader.module.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const TodoHeader = ({setModal}) => {
    return (
        <div className={cl.container}>
            <DateBlock/>
            <div  className={cl.add}>
                <AddCircleOutlineIcon color="primary" fontSize='string' onClick={()=>setModal(true)}/>
            </div>
        </div>
    );
};

export default TodoHeader;