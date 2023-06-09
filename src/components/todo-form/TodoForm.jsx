import React from 'react';
import MyButton from '../UI/myButton/MyButton';
import VerifiedInput from '../UI/verifiedInput/VerifiedInput';
import cl from './TodoForm.module.css';

const TodoForm = ({newItem, setNewItem, verify, changeItem, close, isEdit, isError}) => {

    const formSubmit = (e) =>{
        e.preventDefault();
        verify() && changeItem();
    }

    return (
        <div className={cl.container} >
            <h2 className={cl.title}>{isEdit?'Edit item':'Add new element'}</h2>
            <form 
                onSubmit={(e)=>formSubmit(e)}
                className={cl.form} 
            >
                <div className={cl.fields}>
                    <VerifiedInput 
                        type='text' 
                        name='title'
                        value={newItem.title} 
                        onChange={(e)=>{setNewItem({...newItem, title: e.target.value})}}
                        placeholder='Input title'
                        isError = {isError}
                        errorMessage = 'Title cannot be empty'
                    />
                    <textarea 
                        name='body'
                        value={newItem.body} 
                        onChange={(e)=>{setNewItem({...newItem, body: e.target.value})}}
                        placeholder='Input body' 
                        className={cl.textarea}
                    />
                </div>
                <div className={cl.buttons}>
                    <MyButton type='button' value='Cancel' isReject={true} callback={close}/>
                    <MyButton type='submit' value={isEdit?'Edit':'Add'}/>
                </div>
            </form>
        </div>
    );
};

export default TodoForm;