import React from "react";
import styled from "styled-components";
import AddItem from "../Components/AddItem";
import {Colors} from  "../Components/Colors";

export const Wrapper = styled.div`
width: 100%;
height: 100vh;
background-color: ${Colors.DarkGrey};
`;

const ToDoList = () => {
    return(
        <Wrapper>
            <AddItem/>
        </Wrapper>
    )
}

export default ToDoList;


