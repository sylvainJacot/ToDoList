import React from "react";
import styled from "styled-components";
import {Colors} from "../Colors";
import {TitleSecondaryColor} from "../Theme/Themes";

export const Wrapper = styled.div`
position: relative;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
transition: .2s;
padding: 12px 0px;
&:hover {
transform: scale(1.01);
transition: .2s;
cursor: pointer;
}
`;

export const RightSide = styled.div`
display: flex;
align-items: center;

& > span {
display: inline-block;
margin-left: 8px;
opacity: .3;
&:hover {
opacity: 1;
}
}

`;

export const Task = styled.span`
position: relative;
display: block;
font-size: 1rem;
font-weight: 700;
color: ${props => props.isCompleted?  Colors.MediumGrey : TitleSecondaryColor};
transition: .1s;
&::after {
display: block;
position: absolute;
content: "";
background-color: ${props => props.isCompleted?  Colors.MediumGrey : TitleSecondaryColor};
right: ${props => props.isCompleted?"0":"100%"};
left: 0;
bottom:50%;
height: 2px;
transform: translate(0,50%);
transition: .1s;
}

`;

export const Time = styled.div`
color: ${Colors.MediumGrey};
font-weight: 400;
display: inline-block;
`;

const ToDoItem = ({todo, handleItemClick, index, handleRemove}) => {
    return (
        <Wrapper>
            <Task
                isCompleted={todo.isCompleted}
                onClick={() => handleItemClick(index)}>{todo.message}</Task>
            <RightSide>
                <Time>{todo.creationTime}</Time>
                <span onClick={() => handleRemove(index)}>❌</span>
            </RightSide>
        </Wrapper>
            )
};

export default ToDoItem;