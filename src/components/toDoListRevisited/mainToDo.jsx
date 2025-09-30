'use client'
import React, {useState} from 'react';
import {FaPlus} from "react-icons/fa6";
import {v4} from "uuid";
import ListAgain from "@/components/toDoListRevisited/listAgain";

function MainToDo(props) {
    const [text, setText] = useState('')
    const [todoAgain, setTodoAgain] = useState([])
    const addTodo = () => {
        const newTodo = {
            id: v4(),
            text: text,
            done: false
        }
        setTodoAgain([...todoAgain, newTodo])
    }
    const handelToggle=(id)=>{
        const findit=todoAgain.map((listItem) => {
            if (listItem.id === id) {
                return {...listItem, done: true}
            }
            return listItem;
        })
        setTodoAgain(findit)
    }
    console.log(todoAgain)
    return (
        <>
        <h1 className="text-success text-3xl text-center">ToDo's Revisited</h1>
            <div className=" flex flex-col justify-center items-center">
                <input type="text" className="input" value={text===""?alert("Please filled again"):text} onChange={(e) => setText(e.target.value)} />
<FaPlus size={40} onClick={addTodo}/>
            <ListAgain myList={todoAgain} handelClick={handelToggle}/>
            </div>


        </>
    );
}

export default MainToDo;