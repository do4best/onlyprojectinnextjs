'use client'
import React from 'react';
import {MdAutoDelete} from "react-icons/md";

function TodoList({ todoList,handelToggle }) {

    return (
        <>
            <ul className="list bg-base-100 rounded-box shadow-md">
                {todoList .map((listItem) => (
                    <li key={listItem.id} className={"list-row"}>
                        <span>{listItem.item}  </span>
                        <span><MdAutoDelete size={20} onClick={() => handelToggle(listItem.id)} />
                       </span>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;