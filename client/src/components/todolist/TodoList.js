import React from "react";
import { nanoid } from "nanoid";
import Todo from "../todo/Todo";

import "./todolist.css";

export default function TodoList(props) {
    const {todos, removeTodo} = props.data;

    const customTodos = todos.map((item) => {
        return <Todo key={nanoid()} data={{item, removeTodo}} />;
    });
    return (
        <div className="main--todolist">
            <h2 className="main--todolist__title">Items in your todo :</h2>
            {customTodos}
        </div>
    );
}
