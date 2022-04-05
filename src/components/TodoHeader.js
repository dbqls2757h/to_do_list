import React from 'react';
import '../style/TodoHeader.scss'

const TodoHeader = () => {

    const today = new Date();

    const year = today.getFullYear() + "년";
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return (
        <div className="TodoHeaderContainer">
            <h1 className="todoDate">{year}</h1>
            <div className="todoDateName">{month}</div>
            <div className="todoListLeft">{day}</div>
        </div>
    );
};

export default TodoHeader;
