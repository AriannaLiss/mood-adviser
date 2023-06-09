import React from 'react';
import cl from './Tab.module.css'

const Tab = ({tabNames, selectedTab, changeTab, children}) => {
    return (
        <div className={cl.container}>
            <ul className={cl.header}>
                {tabNames.map((tab, index) => 
                    <li 
                        className = {selectedTab===index?cl.selected+' '+cl.headerItem:cl.headerItem} 
                        key = {tab} 
                        onClick = {()=>changeTab(index)}
                    >{tab}</li>)}
            </ul>
            <div className={cl.body}>
                {children}
            </div>
        </div>
    );
};

export default Tab;