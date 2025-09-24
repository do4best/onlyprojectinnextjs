'use client'
import React from 'react';
import {CiSearch} from "react-icons/ci";
import {v4 as uuidv4} from 'uuid';
import {FaPlus} from "react-icons/fa6";
import TodoList from "@/components/toDoApp/todoList";

function ToDoApp(props) {
    const [test, setTest] = React.useState('');
    const [todo, setTodo] = React.useState([]);

    const addItems = () => {
        const trimmed = test.trim();
        if (!trimmed) return;
        const newToDoItems = {
            id: uuidv4(),
            item: trimmed,
            done: false,
        };
        setTodo([...todo, newToDoItems]);
        setTest("");
    };
    const handelToggle = (itemId) => {
        const newTodo = todo.map((item) => {
            if (item.id === itemId){
                return { ...item, done: !item.done };
            }
            return item;
        });
        setTodo(newTodo);
    }
    const handelDelete = (itemID) => {
        const newToDo=todo.filter((item) => item.id !== itemID);
        setTodo(newToDo)
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1 className={"text-success text-4xl m-5"}>Hello To Do App</h1>
                <div className=" flex justify-center items-center gap-4 ">
                    <input type="text" className="input input-lg" placeholder={"Input your ToDo's"} value={test} onChange={(e) => setTest(e.target.value)} />
                    <FaPlus size={40} onClick={addItems} />
                </div>

                <TodoList todoList={todo} handelToggle={handelToggle} handelDelete={handelDelete} />
            </div>
        </>
    );
}

export default ToDoApp;