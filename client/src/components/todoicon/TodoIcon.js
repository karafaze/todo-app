import React from "react";
import "./todoicon.css";

export default function TodoIcon({item, type, updateTodo, removeTodo, text}) {
    // we receive multiples props here so the todoIcon can be flexible and global

    function handleClick(iconType, item) {
        // when an icon is clicked, we first check which one is it
        switch (iconType) {
            case "checkbox":
                // if checkbox, we reverse old isDone property and update todoList
                item.isDone = !item.isDone;
                updateTodo(item);
                break;
            case "fire":
                // if fire, we reverse old isUrgent property and update todoList
                item.isUrgent = !item.isUrgent;
                updateTodo(item);
                break;
            case "delete":
                // if delete, we simply remove the todo from the list
                removeTodo(item);
                break;
            default:
                break;
        }
    }

    // below, we will handle how each icon is displayed

    function getCheckboxIcon(item) {
        // if todo isDone is true, we return a checked checkbox else and empty circle
        return item.isDone
            ? "ri-checkbox-circle-fill"
            : "ri-checkbox-blank-circle-line";
    }

    function getFireIcon(item) {
        // if todo isUrgent is true, we return a red filled fire icon
        // else we return an empty icon
        return item.isUrgent ? "ri-fire-fill urgent" : "ri-fire-line";
    }

    function getIcon(item, type) {
        // with the switch below, we will use the functions above 
        // and the type props what kind of icon we return
        switch (type) {
            case "checkbox":
                return getCheckboxIcon(item);
            case "fire":
                return getFireIcon(item);
            case "delete":
                return "ri-delete-bin-fill";
            default: 
                break;
        }
    }

    // then we make use of the getIcon to dynamically set the 
    // class to be used for an icon
    const iconClass = getIcon(item, type);


    return (
        <div className="item--icon__container">
            { text ? <span>{text}</span> : null}
            <i onClick={() => handleClick(type, item)} className={`${iconClass} item--icon`}></i>
        </div>
    );
}
