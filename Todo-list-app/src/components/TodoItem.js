import React from 'react'
import { ImBin } from 'react-icons/all';
import { BsCheckAll } from 'react-icons/all';
import { MdNotificationsActive } from 'react-icons/all';


export default function TodoItem(props) {
    const { todo, removeTodo, completeTodo, importantTodo } = props
    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"} style={todo.important ? { border: "4px solid green", color: "white", background: "green",border: "2px solid black" } : {}}>
            {todo.text}
            <div className="iconsContainer">
                <button onClick={() => importantTodo(todo.id)} className="important-btn"><MdNotificationsActive className="notification"/></button>
                <button style={{ marginRight: 5 }} onClick={() => removeTodo(todo.id)} className="remove-btn" ><ImBin className="notification"/></button>
                <button onClick={() => completeTodo(todo.id)} className="complete-btn"><BsCheckAll className="notification"/></button>

                
            </div>
        </div>
    )
}
