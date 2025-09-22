import React from 'react';

function TodoList({ todoList }) {
    const items = (todoList ?? []).map((listItem) => (
        <li key={listItem.id}>
            <span>{listItem.item}</span>
        </li>
    ));

    return (
        <>
            <ul className="list bg-base-100 rounded-box shadow-md">
                {items}
            </ul>
        </>
    );
}

export default TodoList;