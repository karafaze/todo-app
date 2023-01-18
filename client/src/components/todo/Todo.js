import React, { useState } from "react";
import "./todo.css";

export default function Todo(props) {
    const { item, removeTodo } = props.data;
    const [done, setDone] = useState(false);

    const markedAsDone = done ? "circle-fill" : "blank-circle-line";

    function handleClick() {
        setDone((prevDone) => !prevDone);
    }

    return (
        <React.Fragment>
            <div className="item">
                <div className="item--icon__container">
                    <i
                        onClick={handleClick}
                        className={`ri-checkbox-${markedAsDone} item--icon`}
                    ></i>
                </div>
                <p className="item--title">{item} </p>
                <div className="item--icon__container">
                    <span className="item--icon__name">Delete task</span>
                    <i
                        onClick={() => removeTodo(item)}
                        className="ri-delete-bin-fill item--icon"
                    ></i>
                </div>
            </div>
        </React.Fragment>
    );
}
