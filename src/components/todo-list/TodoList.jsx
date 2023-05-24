import React from 'react';
import TodoItem from '../todo-item/TodoItem';
import cl from './TodoList.module.css'

const TodoList = ({items, deleteItem, onCheck}) => {
    return (
        <div className={cl.list}>
            {items.map(item=>{
                return (
                    <TodoItem
                        key={item.id}
                        item={item}
                        deleteItem={deleteItem}
                        onCheck={onCheck}
                    />
                )
            })}
        </div>
    );
};

export default TodoList;