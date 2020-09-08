import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoItemCompleted = ({todo, handleItemClick, index, handleRemove}) => {
    return (
        <>
            { (todo.isCompleted) && (
        <ToDoItem
            todo={todo}
            handleItemClic={handleItemClick}
            index={index}
            handleRemove={handleRemove}
        />
                )}
        </>
    )
};

export default ToDoItemCompleted;