import React from 'react';
import {MdAutoDelete, MdOutlineCancel} from "react-icons/md";
import {CiCircleCheck} from "react-icons/ci";

function TodoList({todoItems,handelToggle,handelDelete}) {
    return (
        <>
            <ul>
            {todoItems.map((item) => (
                <li key={item.id} className={"list-row"}>
                    <div className=" flex flex-row justify-center items-center">
                        <span className="">
                            {


                            }
                        </span>
                        <span className="">
                            {
                                item.text

                            }
                        </span>
                        <span className="">
                            {
                                item.done? (
                                    <MdOutlineCancel size={30} onClick={() => handelToggle(item.id)} />
                                ) : (
                                    <CiCircleCheck size={30} onClick={() => handelToggle(item.id)} />
                                )}


                        </span>
                        <span className="btn btn-square btn-ghost">
                                <MdAutoDelete size={20} onClick={() => handelDelete(item.id)} />
                            </span>
                    </div>
                </li>
            ))}
            </ul>
        </>
    );
}

export default TodoList;