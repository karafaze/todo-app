import React from "react";
import TodoIcon from "../todoicon/TodoIcon";
import "./todo.css";

export default function Todo(props) {
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
