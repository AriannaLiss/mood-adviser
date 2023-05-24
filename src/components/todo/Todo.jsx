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

    const [items, setItems] = useState([{id: 1, title:'Walk in forest', body:'jkl;kj', checked:false}, {id: 2, title:'Sit on the beach',body:'Ride on bicycle', checked:false}]);
    const [newItem, setNewItem] = useState({id:'', title:'', body:''})
    const [modal, setModal] = useState(false);
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedItems, setSelectedItems] = useState(items);
    
    const addItem = (e) =>{
        e.preventDefault();
        setItems([...items, {...newItem, id: uuid(), checked:false}])
        close();
    }

    useEffect(()=>{
        console.log('tab is changed '+selectedTab)
        switch(tabs[selectedTab]){
            case 'Selected': filterItems(); break;
            case 'Unselected': filterItems(false); break;
            default: setSelectedItems(items); 
        }
    },[selectedTab,items])

    const filterItems = (isChecked = true) => {
        const itemsCopy = items;
        setSelectedItems(itemsCopy.filter(item=>isChecked?item.checked:!item.checked))
    }
    
    const checkBoxChange = (id, isChecked) => {
        const itemsCopy = [...items];
        const selectedItemIndex = itemsCopy.findIndex(item=>item.id===id);
        itemsCopy[selectedItemIndex] = {...items[selectedItemIndex], checked:isChecked};
        console.log(itemsCopy[selectedItemIndex])
        setItems(itemsCopy);
    }

    const deleteItem = (id) => {
        console.log('going to delete '+id)
        const itemsCopy = [...items];
        setItems(itemsCopy.filter((item)=>item.id!=id))
    }

    const changeTab = (index) => {
        setSelectedTab(index);
    }

    const close = () =>{
        setNewItem({id:'', title:'', body:''});
        setModal(false)
    }

    return (
        <div className={cl.container}>
            <TodoHeader
                setModal={setModal}
            />
            <Tab 
                tabNames={tabs}
                selectedTab={selectedTab}
                changeTab={changeTab}
            >
                <TodoList 
                    items = {selectedItems}
                    deleteItem={deleteItem}
                    onCheck = {checkBoxChange}
                />
            </Tab>
            <Modal title='Add new element' isShow={modal} close={close}>
                <TodoForm 
                    newItem = {newItem}
                    setNewItem={setNewItem}
                    close={close}
                    addItem={addItem}
                />
            </Modal>
        </div>
    );
};

export default Todo;