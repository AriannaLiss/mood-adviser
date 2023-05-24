import React from 'react';
import MyButton from '../UI/myButton/MyButton';
import cl from './TodoForm.module.css';

const TodoForm = ({newItem, setNewItem, addItem, close}) => {
    return (
        <form className={cl.container} onSubmit={(e)=>addItem(e)}>
            <input type='text' placeholder='Input title' value={newItem.title} onChange={(e)=>{setNewItem({...newItem, title: e.target.value})}}/>
            <textarea placeholder='Input body' value={newItem.body} onChange={(e)=>{setNewItem({...newItem, body: e.target.value})}}/>
            <div className={cl.buttons}>
                <MyButton type='button' value='Cancel' isReject={true} callback={close}/>
                <MyButton type='submit' value='Add'/>
            </div>
        </form>
    );
};

export default TodoForm;