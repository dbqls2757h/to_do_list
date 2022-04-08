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
    };
    const [isOpen, setIsOpen] = useState(false);

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

    const onInsertOpen = () => {
        setIsOpen(isOpen => !isOpen)
    }

    const onInsertTodo = (text) => {
        if (text === "") {
            return alert("할 일을 입력해주세요")
        } else {
            const todo = {
                id: nextId,
                text,
                checked: false
            }
            setTodos(todos => todos.concat(todo));
            nextId++;
        }
    }

    const onCheckToggle = (id) => {
        setTodos(todos => todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo))
    }

    const onRemove = id => e => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <Template>
            <TodoHeader todoLength={todos.length}/>
            <TodoList todos={todos} onCheckToggle={onCheckToggle} onRemove={onRemove}/>
            <button type="submit" onClick={(e) => {
                clickBtn(e)
                onInsertOpen()
            }}>
                <Add className="addBtn"/>
            </button>
            {isOpen && <TodoInsert
                onInsertOpen={onInsertOpen}
                onInsertTodo={onInsertTodo}
            />}
        </Template>
    );
};

export default App;

