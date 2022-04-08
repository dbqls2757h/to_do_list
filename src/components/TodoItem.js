import React from 'react';
import "../style/TodoItem.scss"
import {Check, Delete} from "@material-ui/icons";

const TodoItem = ({todo, onCheckToggle, onRemove}) => {

    const {id, text, checked} = todo;

    return (
        <div className="todoItemContainer">
            <div className={`content ${checked ? "checked" : ""} todoItems checkedBox`}>
                {checked ? <div className="circleBtn" onClick={() => {
                    onCheckToggle(id)
                }}/> : <div className="hasChecked" onClick={() => {
                    onCheckToggle(id)
                }}><Check/></div>}
            </div>
            <div className="todoTxt">{text}</div>
            <div className="deleteBtn" onClick={onRemove(id)}>
                <Delete/>
            </div>
        </div>
    );
};

export default TodoItem;
