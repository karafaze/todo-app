import React, { useState, useRef } from "react";
import "./todoinput.css";

export default function TodoInput() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        if (inputValue.trim() === "") {
            alert("Sorry, you have not added anything");
            return null;
        }
        const newTodo = cleanUserInput(inputValue);
        setTodos((prevTodos) => {
            const updatedTodos = [...prevTodos, newTodo];
            localStorage.setItem("todolist", JSON.stringify(updatedTodos));
            return updatedTodos;
        });
        setInputValue("");
        inputRef.current.focus();
    }

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <div className="main--input">
            <h1>TodoList App </h1>
            <form className="main--form" onSubmit={handleSubmit}>
                <label htmlFor="todoInput">
                    Add a new item to our TodoList
                </label>
                <input
                    id="todoInput"
                    ref={inputRef}
                    onChange={handleChange}
                    value={inputValue}
                />
                <button type="submit">Add Item</button>
            </form>
            <p>Items in todos : </p>
            {todos}
        </div>
    );
}

function cleanUserInput(text) {
    // cleaning user inputs before submitting
    const rawText = text.trim().toLowerCase();
    const cleanText = rawText.charAt(0).toUpperCase() + rawText.slice(1);
    return cleanText;
}
