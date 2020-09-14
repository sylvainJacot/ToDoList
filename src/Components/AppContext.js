import React, {createContext, useState} from "react";

export const ToDoListContext = createContext([{}, () => {}]);

const ToDoListContextProvider = ({children}) => {

    const [themeChoice,setThemeChoice] = useState("dark");

    return <>
    <ToDoListContext.Provider value={[themeChoice,setThemeChoice]}>
        {children}
    </ToDoListContext.Provider>
    </>
}
export default ToDoListContextProvider;
