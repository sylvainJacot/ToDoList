import React from "react";
import styled from "styled-components";
import AddItem from "../Components/AddItem";
import {Colors} from  "../Components/Colors";

export const Wrapper = styled.div`
width: 100%;
height: 100vh;
background-color: ${Colors.DarkGrey};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const Title = styled.h1`
color: ${Colors.LightGrey};
`;

const ToDoList = () => {
    return(
        <Wrapper>
            <Title>To do list</Title>
            <AddItem/>
        </Wrapper>
    )
}

export default ToDoList;


