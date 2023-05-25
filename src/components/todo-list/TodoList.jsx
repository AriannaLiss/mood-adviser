import React from 'react';
import TodoItem from '../todo-item/TodoItem';
import cl from './TodoList.module.css'

const TodoList = ({items, deleteItem, onCheck, showModal}) => {
    return (
        <div className={cl.list}>
            {items.length
                ?items.map(item=>
                        <TodoItem
                            key={item.id}
                            item={item}
                            deleteItem={deleteItem}
                            onCheck={onCheck}
                            showModal={showModal}
                        />)
                :<div className={cl.message}>There is no any items<br/>here yet...</div>
            }
        </div>
    );
};

export default TodoList;