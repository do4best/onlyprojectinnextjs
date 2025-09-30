'use client'
import React from 'react';
import TodoList from "@/components/mynewTodo/todoList";
import {FaPlus} from "react-icons/fa6";
import {v4 as uuidv4} from 'uuid';

function MyMainNewTodo(props) {
    const [text, setText] = React.useState("");
    const [myList, setMyList] = React.useState([]);

    const addItems = () => {
        const newTodos={
            id: uuidv4(),
            text: text,
            done: false
        }
        setMyList([...myList, newTodos])
        setText("")
    }

    const handelToggle = (id) => {
        const index = myList.map((item) => {
            if (item.id === id) {
                return {...item, done: !item.done}
            }
            return item;
        });
        setMyList(index)
    }
    const deleteTodo = (id) => {
        const newTodo=myList.filter((item) => item.id !== id)
        setMyList(newTodo)
    }

    return (
        <>
            <h1 className={"text-center text-2xl text-warning m-4"}>ToDo's List</h1>
            <div className="flex flex-row justify-center items-center">
                <input type="text" className="input " value={text} onChange={(e)=>setText(e.target.value)}/> <span className=""><FaPlus className={"btn btn-primary"} onClick={addItems} size={30}  /> </span>
            </div>
        <TodoList todoItems={myList} handelToggle={handelToggle} handelDelete={deleteTodo}/>

        </>
    );
}

export default MyMainNewTodo;