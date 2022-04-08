import './App.css';
import "./style/GlobalStyle.scss"
import Template from "./components/Template";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import {useState} from "react";
import {Add} from "@material-ui/icons";
import TodoInsert from "./components/TodoInsert";

let nextId = 4;

const App = () => {
    const clickBtn = (e) => {
        e.currentTarget.classList.toggle('active')
    }


    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "할일 1",
            checked: true
        },
        {
            id: 2,
            text: "할일 2",
            checked: true
        },
        {
            id: 3,
            text: "할일 3",
            checked: true
        }
    ]);

    const onInsertTodo = (text) => {
        if(text === ""){
            return alert("할 일을 입력해주세요")
        }else{
            const todo = {
                id: nextId,
                text,
                checked: false
            }
            setTodos(todo =>  todos.concat(todo));
            nextId++;
        }
    }

    return (
        <Template>
            <TodoHeader todoLength={todos.length}/>
            <TodoList todos={todos}/>
            <button type="submit" onClick={(e)=>{
                clickBtn(e)
            }}>
                <Add className="addBtn"/>
            </button>
            <TodoInsert onInsertTodo={onInsertTodo}/>
        </Template>
    );
};

export default App;

