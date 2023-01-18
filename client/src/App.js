import React from "react";
import Header from "./components/header/Header";
import TodoInput from './components/todoinput/TodoInput'
import TodoList from './components/todolist/TodoList'
import Footer from "./components/footer/Footer";


export default function App() {
    return (
        <React.Fragment>
            <Header />
            <main>
                <TodoInput />
                <TodoList />
            </main>
            <Footer />
        </React.Fragment>
    );
}
