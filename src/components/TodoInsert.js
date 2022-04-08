import React, {useState} from 'react';
import "../style/TodoInsert.scss"

const TodoInsert = ({onInsertTodo}) => {

    const [value, setValue] = useState("");


    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onInsertTodo(value);
        setValue("");
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="할 일을 입력 후, Enter를 누르세요" value={value} onChange={onChange}/>
        </form>
    )
};

export default TodoInsert;
