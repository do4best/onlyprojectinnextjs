import React from 'react';
import {MdAutoDelete, MdOutlineCancel} from "react-icons/md";
import {CiCircleCheck} from "react-icons/ci";

function ListAgain({myList,handelClick}) {
    return (
        <>
<ul>
    {myList.map((item, index) => (
        <li key={index} className={"list"}>
            <span>{item.text}</span>
            <span>
                {item.done?(<MdOutlineCancel size={30} onClick={()=>handelClick(item.id)}/>):(<CiCircleCheck size={30} onClick={()=>handelClick(item.id)}/>)}
            </span>
            <span>
                {<MdAutoDelete/>}
            </span>
        </li>
    ))}
</ul>

        </>
    );
}

export default ListAgain;