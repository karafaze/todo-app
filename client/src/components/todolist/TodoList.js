import React from "react";

export default function TodoList(props){
    const todos = props.data || []
    return (
        <p>Items in your todo :{todos}</p>
    )
}