'use client'
import React from 'react';
import AnimatedText from "react-animated-text-content";

function MainTextAnimation(props) {
    const [animation, setAnimation] = React.useState("")
    const [text, setText] = React.useState("");
    const [moreText, setMoreText] = React.useState([])
    const handelClick = () => {
        setAnimation(text)
        setText("")
    }
    const handelClick2 = () => {
        const newText = {
            id:Math.random(),
            text:text
        }
        setMoreText([...text,newText])
        setText("")
    }
    return (
        <>
        <div className={"flex flex-col justify-center items-center"}>
            <form action="" className="" onSubmit={(e)=>e.preventDefault()}>

            <div className="flex flex-row justify-center items-center">
                <input type="text" className={"input"} value={text} onChange={(e)=>setText(e.target.value)}/> <button className={"btn btn-lg rounded btn-primary"} onClick={handelClick}>Add</button>
                <button className={"btn btn-lg rounded btn-primary"} onClick={handelClick2}>Add Text</button>
            </div>
            </form>
            <h1 className={"text-warning text-3xl mt-10"}><AnimatedText type={"chars"} interval={0.04} duration={1.1} animation={{
                y:"-100px",
            }}>{text}</AnimatedText></h1>
            <ul>
                {moreText.map((item,index)=>(
                    <li key={index} className={"text-warning text-2xl"}><AnimatedText type={"chars"} interval={0.04} duration={1.1} animation={{
                        y:"-100px",
                    }}>{index + 1} {item}</AnimatedText></li>
                ))}
            </ul>
        </div>

        </>
    );
}

export default MainTextAnimation;