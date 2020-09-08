import React from "react";
import ToDoItem from "./ToDoItem";



const ToDoItemActive = ({todo, handleItemClick, index, handleRemove}) => {
    if (!todo.isCompleted) {
    return (
        <ToDoItem
            todo={todo}
            handleItemClic={handleItemClick}
            index={index}
            handleRemove={handleRemove}
        />
    )
    } else {
        return null;
    }
};

export default ToDoItemActive;
