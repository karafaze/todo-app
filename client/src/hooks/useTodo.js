import { useState, useRef } from "react";

export default function useTodo() {
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todolist")) || []
    );
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        if (inputValue.trim() === "") {
            alert("Sorry, you have not added anything");
            return null;
        }
        const newTodo = {
            name: cleanUserInput(inputValue),
            isDone: false,
            isUrgent: false,
        };
        setTodos(prevTodoList => {
            const updatedTodos = [...prevTodoList, newTodo];
            storeTodoList(updatedTodos)
            return updatedTodos;
        });
        setInputValue("");
        inputRef.current.focus();
    }

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    function updateTodo(updatedTodo){
        setTodos(prevTodoList => {
            const updatedTodoList = prevTodoList.filter(todoItem => {
                if (todoItem.name === updatedTodo.name){
                    return updatedTodo;
                }
                return todoItem
            })
            storeTodoList(updatedTodoList)
            return updatedTodoList;
        })
    }

    function removeTodo(oldTodo) {
        setTodos(prevTodoList => {
            const updatedTodos = prevTodoList.filter(todoItem => todoItem.name !== oldTodo.name);
            storeTodoList(updatedTodos);
            return updatedTodos;
        });
    }

    function storeTodoList(todoArr){
        localStorage.setItem("todolist", JSON.stringify(todoArr));
    }

    return {
        handleSubmit,
        inputRef,
        handleChange,
        inputValue,
        todos,
        removeTodo,
        updateTodo,
    };
}

function cleanUserInput(text) {
    // cleaning user inputs before submitting
    const rawText = text.trim().toLowerCase();
    const cleanText = rawText.charAt(0).toUpperCase() + rawText.slice(1);
    return cleanText;
}
