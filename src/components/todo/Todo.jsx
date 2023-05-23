import React from 'react';
import TodoHeader from '../todo-header/TodoHeader';
import Tab from '../UI/tab/Tab';
import cl from './Todo.module.css'

const Todo = () => {
    return (
        <div className={cl.container}>
            <TodoHeader/>
            <Tab tabNames={['All', 'Selected', 'Done']} />
        </div>
    );
};

export default Todo;