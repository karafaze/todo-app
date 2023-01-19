import React from "react";
import { nanoid } from "nanoid";
import Todo from "../todo/Todo";

import "./todolist.css";

export default function TodoList(props) {
    const {todos, removeTodo, updateTodo} = props.data;

    if (todos.length === 0){
        return <p className="main--todolist__empty">You have nothing to do bro</p>
    } else {
        const customTodos = todos.map((item) => {
            return <Todo key={nanoid()} data={{item, removeTodo, updateTodo}} />;
        });
        return (
            <div className="main--todolist">
                <h2 className="main--todolist__title">Items in your todo :</h2>
                <div className="main--todolist__items">{customTodos}</div>
            </div>
        );
    }

}
