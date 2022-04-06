import React from 'react';
import "../style/TodoItem.scss"
import {Check, Delete} from "@material-ui/icons";

const TodoItem = () => {


    const checked = (e) => {
    const todoTxt = document.querySelector('.todoTxt');
        e.currentTarget.classList.toggle('active');
        todoTxt.classList.toggle('active');
    }


    return (
        <div className="todoItemContainer">
            <div className="todoCheckCircle" onClick={checked}>
                <Check className="check"/>
            </div>
            <div className="todoTxt">asdf</div>
            <div className="todoDelete">
                <Delete/>
            </div>
        </div>
    );
};

export default TodoItem;
