import React from 'react';
import '../style/TodoList.scss';
import TodoItem from "./TodoItem";

const TodoList = ({todos, onCheckToggle, onRemove}) => {
    return (
        <div className="todoListContainer">
            {todos.map(todo =>(
                <TodoItem key={todo.id} todo={todo} onCheckToggle={onCheckToggle} onRemove={onRemove}/>
            ))}
        </div>
    );
};

export default TodoList;
