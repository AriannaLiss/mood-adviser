import { Checkbox } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import cl from './TodoItem.module.css'

const TodoItem = ({item, deleteItem,onCheck}) => {

    return (
        <div className={cl.container}>
            <label className ={cl.item}>
                <Checkbox 
                    label={item} 
                    checked={item.checked}
                    size='large' 
                    onChange={(e)=>onCheck(item.id, e.target.checked)}
                />
                {item.title}
            </label>
            <div className={cl.buttons}>
                <div className={cl.delete} onClick={()=>deleteItem(item.id)}><DeleteIcon fontSize="large"/></div>
            </div>
        </div>
    );
};

export default TodoItem;