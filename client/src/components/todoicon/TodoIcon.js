import React from "react";
import "./todoicon.css";

export default function TodoIcon({item, type, updateTodo, removeTodo, text}) {
    function handleClick(iconType, item) {
        console.log('button click')
        switch (iconType) {
            case "checkbox":
                item.isDone = !item.isDone;
                updateTodo(item);
                break;
            case "fire":
                item.isUrgent = !item.isUrgent;
                updateTodo(item);
                break;
            case "delete":
                removeTodo(item);
                break;
            default:
                break;
        }
    }

    const iconClass = getIcon(item, type);

    function getIcon(item, type) {
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

    function getCheckboxIcon(item) {
        return item.isDone
            ? "ri-checkbox-circle-fill"
            : "ri-checkbox-blank-circle-line";
    }

    function getFireIcon(item) {
        return item.isUrgent ? "ri-fire-fill urgent" : "ri-fire-line";
    }

    return (
        <div className="item--icon__container">
            { text ? <span>{text}</span> : null}
            <i onClick={() => handleClick(type, item)} className={`${iconClass} item--icon`}></i>
        </div>
    );
}
