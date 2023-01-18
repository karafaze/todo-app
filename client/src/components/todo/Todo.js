import React from "react";
import "./todo.css";

export default function Todo(props){
    const {item, removeTodo} = props.data
    return (
        <div>
            <p className="main--todolist__item">{item} </p>
            <button onClick={() => removeTodo(item)}>Delete</button>
        </div>
    )
}