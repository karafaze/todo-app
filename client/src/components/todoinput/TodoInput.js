import React from "react";
import "./todoinput.css";

export default function TodoInput(props) {
    // handles part where user enter its own todo inputs
    const { handleSubmit, handleChange, inputRef, inputValue } = props.data

    return (
        <div className="main--input">
            <h1>TodoList App </h1>
            <form className="main--form" onSubmit={handleSubmit}>
                <label htmlFor="todoInput">
                    Add a new item to your TodoList
                </label>
                <input
                    id="todoInput"
                    ref={inputRef}
                    onChange={handleChange}
                    value={inputValue}
                />
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
}