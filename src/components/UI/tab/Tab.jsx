import React from 'react';
import TodoList from '../../todo-list/TodoList';
import cl from './Tab.module.css'

const Tab = ({tabNames}) => {
    return (
        <div className={cl.container}>
            <ul className={cl.header}>
                {tabNames.map(tab => <li className = {cl.headerItem} key = {tab}>{tab}</li>)}
            </ul>
            <TodoList list={['Walk in forest', 'Sit on the beach', 'Ride on bicycle']}/>
        </div>
    );
};

export default Tab;