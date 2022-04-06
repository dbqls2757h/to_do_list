import React from 'react';
import '../style/TodoList.scss';

const TodoList = ({todos}) => {
    return (
        <div>{todos.map((todo)=>(<div>{todo.text}</div>))}</div>
    );
};

export default TodoList;
