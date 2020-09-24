import React, {useEffect, useState, useRef} from "react";
import styled from "styled-components";
import {Colors} from "../Colors";
import {TitleSecondaryColor} from "../Theme/Themes";
import EditButton from "./EditButton";
import PropTypes from "prop-types";

export const Container = styled.div`

`;

export const Wrapper = styled.div`
position: relative;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
transition: .2s;
padding: 10px 0px 0px 0px;
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

export const TaskNotEditing = styled.span`
width: 64%;
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
width: ${props => props.isCompleted? "100%": "0"};
bottom:50%;
height: 2px;
transform: translate(0,50%);
transition: .1s;
}

`;

export const TaskEditing = styled.input`

`;


export const Time = styled.div`
color: ${Colors.MediumGrey};
font-weight: 400;
display: inline-block;
`;


const ToDoItem = ({todo, handleItemClick, index, handleRemove}) => {

    const [isEditing,setIsEditing] = useState(false)
    const isMounted = useRef(true)

    useEffect(() =>{
        return () => {

        }
    }, [])

    const handleEditOnCLick = (e) => {
        e.preventDefault()
        if(isMounted.current)
        setIsEditing(!setIsEditing);
        console.log("clicked")
        return isEditing
    }

    return (
        <>
            <Container>
                <Wrapper>
                    {
                    isEditing ?
                        <TaskEditing
                            value={todo.message}
                            onClick={() => handleItemClick(index)}
                            isCompleted={todo.isCompleted}
                        />
                        :
                        <TaskNotEditing
                            onClick={() => handleItemClick(index)}
                            isCompleted={todo.isCompleted}>
                            {todo.message}
                        </TaskNotEditing>
                    }
                    <RightSide>
                        <Time>{todo.creationTime}</Time>
                        <span onClick={() => handleRemove(index)}>❌</span>
                    </RightSide>
                </Wrapper>
                <EditButton onClick={handleEditOnCLick}/>
            </Container>
        </>
            )
};

export default ToDoItem;