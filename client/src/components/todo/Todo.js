import React from "react";
import TodoIcon from "../todoicon/TodoIcon";
import "./todo.css";

export default function Todo(props) {
    // handles each todo item to be displayed in a line
    // for each todo, we add <TodoIcon /> in charge of displaying icons 
    // and we give them props so todoicon can decide what to do with it
    const { item, removeTodo, updateTodo } = props.data;
    return (
        <React.Fragment>
            <div className="item">
                <TodoIcon
                    item={item} type={'checkbox'} updateTodo={updateTodo}
                />
                <p className="item--title">{item.name} </p>
                <TodoIcon 
                    item={item} type={'delete'} removeTodo={removeTodo} text={"Delete"}
                />
                <TodoIcon
                    item={item} type={'fire'} updateTodo={updateTodo} text={"Urgent"}
                />
            </div>
        </React.Fragment>
    );
}
