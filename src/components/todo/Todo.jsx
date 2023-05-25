import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import TodoForm from '../todo-form/TodoForm';
import TodoHeader from '../todo-header/TodoHeader';
import TodoList from '../todo-list/TodoList';
import Modal from '../UI/modal/Modal';
import Tab from '../UI/tab/Tab';
import cl from './Todo.module.css'

const Todo = () => {

    const tabs = ['All', 'Selected', 'Unselected'];

    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({id:'', title:'', body:''})
    const [modal, setModal] = useState(false);
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedItems, setSelectedItems] = useState(items);
    const [isEdit, setIsEdit] = useState(false);
    const [isError, setIsError] = useState(false)

    useEffect(()=>{
        switch(tabs[selectedTab]){
            case 'Selected': filterItems(); break;
            case 'Unselected': filterItems(false); break;
            default: setSelectedItems(items); 
        }
    },[selectedTab,items])
    
    const addItem = () =>{
        setItems([...items, {...newItem, id: uuid(), checked:false}])
    }
    
    const editItem = () => {
            const itemsCopy = [...items];
            const selectedItemIndex = itemsCopy.findIndex(item=>item.id===newItem.id);
            itemsCopy[selectedItemIndex] = {...newItem};
            setItems(itemsCopy);
    }

    const deleteItem = (id) => {
        const itemsCopy = [...items];
        setItems(itemsCopy.filter((item)=>item.id!=id))
    }

    const changeItem = () => {
        isEdit ? editItem() : addItem();
        close();
    }

    const checkBoxChange = (id, isChecked) => {
        const itemsCopy = [...items];
        const selectedItemIndex = itemsCopy.findIndex(item=>item.id===id);
        itemsCopy[selectedItemIndex] = {...items[selectedItemIndex], checked:isChecked};
        setItems(itemsCopy);
    }

    const filterItems = (isChecked = true) => {
        const itemsCopy = [...items];
        setSelectedItems(itemsCopy.filter(item=>isChecked?item.checked:!item.checked))
    }

    const verifyNewItem=()=>{
        const validation = newItem.title && newItem.title.trim() ? true : false;
        setIsError(!validation);
        return validation;
    }

    const close = () =>{
        setNewItem({id:'', title:'', body:''});
        setIsError(false);
        setModal(false);
    }

    const showModal = (item) => {
        if (!item) setIsEdit(false);
        else{
            setIsEdit(true);
            setNewItem(item);
        }
        setModal(true);
    }

    return (
        <div className={cl.container}>
            <TodoHeader
                showModal={showModal}
            />
            <Tab 
                tabNames={tabs}
                selectedTab={selectedTab}
                changeTab={setSelectedTab}
            >
                <TodoList 
                    items = {selectedItems}
                    deleteItem={deleteItem}
                    onCheck = {checkBoxChange}
                    showModal = {showModal}
                />
            </Tab>
            <Modal isShow={modal} close={close}>
                <TodoForm 
                    newItem = {newItem}
                    setNewItem={setNewItem}
                    close={close}
                    verify={verifyNewItem}
                    changeItem={changeItem}
                    isEdit={isEdit}
                    isError={isError}
                />
            </Modal>
        </div>
    );
};

export default Todo;