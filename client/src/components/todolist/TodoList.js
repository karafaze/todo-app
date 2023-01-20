import React from "react";
import { nanoid } from "nanoid";
import Todo from "../todo/Todo";

import "./todolist.css";

export default function TodoList(props) {
    // handles the listing of todos that have been submitted
    const {todos, removeTodo, updateTodo} = props.data;

    // if there's no todos, we display a simple message
    if (todos.length === 0){
        return <p className="main--todolist__empty">You have nothing to do bro</p>
    } else {
        // if todo has items we map over each one of them and return 
        // a list of <Todo /> components to which we pass data as props
        const customTodos = todos.map((item) => {
            return <Todo key={nanoid()} data={{item, removeTodo, updateTodo}} />;
        });
        return (
            <div className="main--todolist">
                <h2 className="main--todolist__title">Items in your todo :</h2>
                <div className="main--todolist__items">{customTodos}</div>
            </div>
        );
    }

}
// export default function TodoList() {
//     const {todos, removeTodo} = useTodo();

//     if (todos.length === 0){
//         return <p className="main--todolist__empty">You have nothing to do bro</p>
//     } else {
//         const customTodos = todos.map((item) => {
//             return <Todo key={nanoid()} data={{item, removeTodo}} />;
//         });
//         return (
//             <div className="main--todolist">
//                 <h2 className="main--todolist__title">Items in your todo :</h2>
//                 <div className="main--todolist__items">{customTodos}</div>
//             </div>
//         );
//     }

// }
