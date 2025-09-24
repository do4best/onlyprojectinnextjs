'use client'
import React from 'react';
import {MdAutoDelete, MdOutlineCancel} from "react-icons/md";
import {CiCircleCheck} from "react-icons/ci";

function TodoList({ todoList,handelToggle,handelDelete }) {

    return (
        <>
            <ul className="list bg-base-100 rounded-box shadow-md w-1/3 mt-4 ">
                {todoList.map((listItem) => (
                    <li
                        key={listItem.id}
                        className={`list-row flex flex-row items-center m-5 justify-between px-3 py-2 ${listItem.done ? 'line-through bg-red-500' : 'bg-white text-black'}`}
                    >
                       {listItem.item}
                        <div className="flex items-center gap-1">
                            <span className="btn btn-square btn-ghost">
                                {listItem.done ? (
                                    <MdOutlineCancel size={20} onClick={() => handelToggle(listItem.id)} />
                                ) : (
                                    <CiCircleCheck size={20} onClick={() => handelToggle(listItem.id)} />
                                )}
                            </span>
                            <span className="btn btn-square btn-ghost">
                                <MdAutoDelete size={20} onClick={() => handelDelete(listItem.id)} />
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;