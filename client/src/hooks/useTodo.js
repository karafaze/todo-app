import { useState, useRef } from "react";

export default function useTodo() {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todolist')) || []);
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

    return { handleSubmit, inputRef, handleChange, inputValue, todos }
}

function cleanUserInput(text) {
    // cleaning user inputs before submitting
    const rawText = text.trim().toLowerCase();
    const cleanText = rawText.charAt(0).toUpperCase() + rawText.slice(1);
    return cleanText;
}
