import React, { useState } from "react";
import "./todo.css";

export default function Todo(props) {
    const { item, removeTodo, saveTodos } = props.data;

    let iconClass = item.isDone === true ? "circle-fill" : "blank-circle-line";

    function handleClick() {
        item.isDone = !item.isDone;
        saveTodos(item);
    }

    return (
        <React.Fragment>
            <div className="item">
                <div className="item--icon__container">
                    <i
                        onClick={handleClick}
                        className={`ri-checkbox-${iconClass} item--icon`}
                    ></i>
                </div>
                <p className="item--title">{item.name} </p>
                <div className="item--icon__container">
                    <span className="item--icon__name">Delete</span>
                    <i
                        onClick={() => removeTodo(item)}
                        className="ri-delete-bin-fill item--icon"
                    ></i>
                </div>
                <div className="item--icon__container">
                    <span className="item--icon__name">Mark as urgent</span>
                    <i className="ri-fire-line item--icon"></i>
                </div>
            </div>
        </React.Fragment>
    );
}
