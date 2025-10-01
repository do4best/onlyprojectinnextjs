'use client'
import React from 'react';
import ListItem1 from "@/components/todolist1/listItem1";

function MaintoDo1(props) {
    const [text, setText] = React.useState("");
    const [myList, setMyList] = React.useState([]);
    const addItems = () => {
        const trimmed = text.trim();
        if (trimmed === "") return;
        const newItems={
            id:Math.random(),
            text:trimmed,
            done:false
        }
        setMyList([...myList,newItems])
        setText("")
    }
    const handelToggle = (id) => {
        const storeit = myList.map((item) => {
            if (item.id === id) {
                return {...item, done: !item.done}
            }
            return item;
        });
        setMyList(storeit)
    }
    const delete_it = (id) => {
        const newTodo=myList.filter((item) => item.id !== id)
        setMyList(newTodo)
    }
    return (
        <>
<h1 className={"text-4xl text-warning text-center"}>
    My new To Do's'
</h1>
            <div className="flex flex-row justify-center items-center">
                <input type="text" className="input " value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault?.(); addItems(); } }} /> <span className=""><button className={"btn btn-primary ml-2"} onClick={addItems} disabled={text.trim() === ""}>Add</button> </span>
            </div>
        <ListItem1 map_it={myList} handel_it={handelToggle} delete_it={delete_it}/>
        </>
    );
}

export default MaintoDo1;