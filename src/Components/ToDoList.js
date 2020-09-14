import React, {useState, useEffect,} from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import AddItem from "../Components/AddItem";
import {Route, Switch} from "react-router-dom";
import {TitleColor, BackgroundColor} from "../Components/Theme/Themes";
import TabStatus from "./TabStatus/TabStatus";
import ToDoItem from "./ToDoItem/ToDoItem";
import ToDoItemActive from "./ToDoItem/ToDoItemActive";
import ThemeTabs from "./Theme/ThemeTabs";
import ResetBtn from "./ResetButton";
import ToDoItemCompleted from "./ToDoItem/ToDoItemCompleted";

/* Styling */


export const Wrapper = styled.div`
width: 100%;
height: 100vh;
background-color: ${BackgroundColor};
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

Wrapper.propTypes = {
    mode: PropTypes.oneOf(["light", "dark", "yellow"])
};

Wrapper.defaultProps = {
    mode: "dark",
};


export const Container = styled.div`
width: 600px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
export const Title = styled.h1`
color: ${TitleColor};
font-weight: 800;
font-style: italic;
`;

export const TasksContainer = styled.div`
    width: 100%;
    max-height: 400px;
    height: 400px;
    overflow: scroll;
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
        const conf = window.confirm("Ca va être tout noir ! 📢")
        if (conf == true) {
            localStorage.setItem("todolist",JSON.stringify([]))
            setToDos([])
        }
        return null

    }

    const HandleEditOnClick = () => {

    }


    return(
        <Wrapper>
            <Container>
                <Title>TODOLIST</Title>
                <AddItem addToDo={addToDo}/>
                <TabStatus/>
                <TasksContainer>
                {toDos.map((item,index) => (
                    <Switch key={item.id}>
                        <Route path="/"
                           render={(props) => (
                               <ToDoItem
                                   {...props}
                                   todo={item}
                                   handleItemClick={handleItemClick}
                                   index={index}
                                   handleRemove={handleRemove}
                                   HandleEditOnClick={HandleEditOnClick}
                                />
                               )}
                        exact
                        />

                        <Route path="/active"
                               render={(props) => (
                                   <ToDoItemActive
                                       {...props}
                                       todo={item}
                                       handleItemClick={handleItemClick}
                                       index={index}
                                       handleRemove={handleRemove}
                                       HandleEditOnClick={HandleEditOnClick}
                                   />
                               )}
                        />

                        <Route path="/completed"
                               render={(props) => (
                                   <ToDoItemCompleted
                                       {...props}
                                       todo={item}
                                       handleItemClick={handleItemClick}
                                       index={index}
                                       handleRemove={handleRemove}
                                       HandleEditOnClick={HandleEditOnClick}
                                   />
                               )}
                        />



                    </Switch>
                ))}
                </TasksContainer>
                <ResetBtn
                    HandleResetBtn={HandleResetBtn}
                />
                    <ThemeTabs/>

            </Container>
        </Wrapper>
    )
}

export default ToDoList;


