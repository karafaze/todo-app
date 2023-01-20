import { useState, useRef } from "react";

// this useTodo is going to handle all the todo crud operations + state within app
export default function useTodo() {
    // initialize todos with [] if user has no todolist stored in localstorage
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todolist")) || []
    );
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);

    function handleSubmit(event) {
        // when user submits a todo : 
        event.preventDefault();
        // first check if input is empty
        if (inputValue.trim() === "") {
            alert("Sorry, you have not added anything");
            return null;
        }
        // else, we set a new todo item as object
        const newTodo = {
            name: cleanUserInput(inputValue),
            isDone: false,
            isUrgent: false,
        };
        // set todo list to add todo on top of other todo
        setTodos(prevTodoList => {
            const updatedTodos = [newTodo, ...prevTodoList];
            // save todo in localstorage with storeTodoList
            storeTodoList(updatedTodos)
            return updatedTodos;
        });
        // clean input and set focus back to it
        setInputValue("");
        inputRef.current.focus();
    }

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    function updateTodo(updatedTodo){
        // when user modifies todo isDone / isUrgent
        setTodos(prevTodoList => {
            const updatedTodoList = prevTodoList.filter(todoItem => {
                // if todo matches updatedTodo we replace it in list
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
        // if user removes a todo we filter through list and remove it
        setTodos(prevTodoList => {
            const updatedTodos = prevTodoList.filter(todoItem => todoItem.name !== oldTodo.name);
            storeTodoList(updatedTodos);
            return updatedTodos;
        });
    }

    function storeTodoList(todoArr){
        // function to be used whenever we want to update 
        // localeStorage
        localStorage.setItem("todolist", JSON.stringify(todoArr));
    }

    // returns all variables and functions needed in the app as object
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
