import React from 'react';

const DateBlock = () => {
    const current = new Date();
    const date = current.getDate();
    const month = current.getMonth()+1;
    const year = current.getFullYear()
    return (
        <div>
            {`${date}.${month<10?`0${month}`:month}.${year}`}
        </div>
    );
};

export default DateBlock;