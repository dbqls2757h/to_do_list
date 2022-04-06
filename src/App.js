import './App.css';
import "./style/GlobalStyle.scss"
import Template from "./components/Template";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import {useState} from "react";

function App() {

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
    ])

    return (
        <Template>
            <TodoHeader/>
            <TodoItem/>
            <TodoList/>
        </Template>
    );
}

export default App;
