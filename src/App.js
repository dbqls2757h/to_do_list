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
            text: "아침 산책",
            checked: false
        },
        {
            id: 2,
            text: "오늘의 뉴스 읽기",
            checked: false
        },
        {
            id: 3,
            text: "샌드위치 사 먹기",
            checked: true,
        },
        {
            id: 4,
            text: "리액트 공부하기",
            checked: true,
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
            <TodoHeader todoLen={todos.filter(todo => todo.checked === true).length}/>
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

