import React, {useState, useEffect} from "react";
import styled from "styled-components";
import AddItem from "../Components/AddItem";
import {Route, Switch} from "react-router-dom";
import {Colors} from  "../Components/Colors";
import TabStatus from "./TabStatus/TabStatus";
import ToDoItem from "./ToDoItem";
import ToDoItemActive from "./ToDoItemActive";
import ThemeTabs from "./ThemeTabs";
import ResetBtn from "./ResetButton";
import ToDoItemCompleted from "./ToDoItemCompleted";

/* Styling */
export const Wrapper = styled.div`
width: 100%;
height: 100vh;
background-color: ${Colors.DarkGrey};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
export const Container = styled.div`
width: 500px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
export const Title = styled.h1`
color: ${Colors.LightGrey};
`;

const ToDoList = () => {

    /* --------------- HOOKS ----------------------------------------------- */
    /* -------------------------------------------------------------------------------------------------- */

    /* Check the localStorage (written is jason) and return the todolist if it does exist */
    const initialState = () => {
        const savedItem = JSON.parse(localStorage.getItem("todolist"));
        return savedItem || [];
    };

    const [toDos, setToDos] = useState(initialState());

    /* toDos is added in the localStorage with the key todolist */
    useEffect(() => {
        localStorage.setItem("todolist", JSON.stringify(toDos));
    }, [toDos]);


    /* --------------- FUNCTIONS ----------------------------------------------- */
    /* -------------------------------------------------------------------------------------------------- */

    /* Get the time and date */
    /* https://hdtuto.com/article/react-js-get-current-date-and-time-example */
    const giveMeDate = () => {
        let today = new Date();
        let date =
            today.getDate() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getFullYear();

        let time =
            today.getHours() +
            ":" +
            (today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()) + ':'+
            (today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds());
        let creationTime = "🕙" + " " + time + " " + date;
        return creationTime;
    };


    /* addToDo is the value value parameter used in AddItem*/
    const addToDo = (value) => {
        const creationTime = giveMeDate()
        let newItem = [
        ...toDos,
        {
            id: new Date().getTime(),
            message: value,
            isCompleted: false,
            creationTime: creationTime
        }
        ]
        setToDos(newItem)
    }

    /* array.splice(position, number of items to remove/add, ...items)*/
    const handleRemove = (index) => {
        const newToDos = [...toDos];
        newToDos.splice(index, 1);
        setToDos(newToDos);
    };

    const handleItemClick = (index) => {
        const newToDos = [...toDos]
        newToDos[index].isCompleted = !newToDos[index].isCompleted;
        setToDos(newToDos)
    }

    /* Add/Update the key and value from the storage */
    const HandleResetBtn = () => {
        alert("Ca va être tout noir ! 📢")
        localStorage.setItem("todolist",JSON.stringify([]))
        setToDos([])
    }


    return(
        <Wrapper>
            <Container>
                <Title>To do list</Title>
                <AddItem addToDo={addToDo}/>
                <TabStatus/>
                <>
                {toDos.map((item,index) => (
                    <Switch key={item.id}>
                        <Route path="/"
                           render={(props) => (
                               <ToDoItem
                                   {...props}
                                   todo={item}
                                   key={`A-${item.id}`}
                                   message={item.message}
                                   index={index}
                                   isCompleted={item.isCompleted}
                                   creationTime={item.creationTime}
                                   handleRemove={handleRemove}
                                   handleItemClick={handleItemClick}
                                />
                               )}
                        exact
                        />

                        <Route path="/active"
                               render={(props) => (
                                   <ToDoItemActive
                                       {...props}
                                       todo={item}
                                       key={`B-${item.id}`}
                                       message={item.message}
                                       index={index}
                                       isCompleted={item.isCompleted}
                                       creationTime={item.creationTime}
                                       handleRemove={handleRemove}
                                       handleItemClick={handleItemClick}
                                   />
                               )}
                        />

                        <Route path="/completed"
                               render={(props) => (
                                   <ToDoItemCompleted
                                       {...props}
                                       todo={item}
                                       key={`C-${item.id}`}
                                       message={item.message}
                                       index={index}
                                       isCompleted={item.isCompleted}
                                       creationTime={item.creationTime}
                                       handleRemove={handleRemove}
                                       handleItemClick={handleItemClick}
                                   />
                               )}
                        />



                    </Switch>
                ))}
                </>
                <ResetBtn
                    HandleResetBtn={HandleResetBtn}
                />
                <ThemeTabs/>
            </Container>
        </Wrapper>
    )
}

export default ToDoList;


