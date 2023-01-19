import React from "react";
import Header from "./components/header/Header";
import TodoInput from "./components/todoinput/TodoInput";
import TodoList from "./components/todolist/TodoList";
import Footer from "./components/footer/Footer";
import useTodo from "./hooks/useTodo";

export default function App() {
    const {
        todos,
        handleSubmit,
        handleChange,
        inputRef,
        inputValue,
        removeTodo,
        updateTodo,
    } = useTodo();
    return (
        <React.Fragment>
            <Header />
            <main>
                <TodoInput
                    data={{ handleChange, handleSubmit, inputRef, inputValue }}
                />
                <TodoList
                    data={{ todos, removeTodo, updateTodo }}
                />
            </main>
            <Footer />
        </React.Fragment>
    );
}
