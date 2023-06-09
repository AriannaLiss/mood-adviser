import { Checkbox } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import cl from './TodoItem.module.css'

const TodoItem = ({item, deleteItem,onCheck,showModal}) => {

    return (
        <div className={cl.container}>
            <Checkbox 
                id = {item.id}
                checked={item.checked}
                size='large' 
                onChange={(e)=>onCheck(item.id, e.target.checked)}
            />
            <div className ={cl.item} onClick={()=>showModal(item)}>
                {item.title}
            </div>
            <div className={cl.buttons}>
                <div className={cl.delete} onClick={()=>deleteItem(item.id)}><DeleteIcon fontSize="large"/></div>
            </div>
        </div>
    );
};

export default TodoItem;