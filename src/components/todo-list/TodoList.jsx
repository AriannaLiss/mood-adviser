import React from 'react';
import cl from './TodoList.module.css'

const TodoList = ({list}) => {
    return (
        <ul className={cl.list}>
            {list.map(item=>{
                return (
                    <li
                        key={item}
                        className ={cl.item}
                    >{item}</li>
                )
            })}
        </ul>
    );
};

export default TodoList;