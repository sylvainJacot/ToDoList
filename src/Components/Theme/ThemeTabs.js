import React, {useContext} from "react";
import styled from "styled-components";
import {Colors} from "../Colors";
import {ToDoListContext} from "../AppContext";

export const Wrapper = styled.div`
display: flex;
margin-top: 90vh;
position: absolute;
`;
export const Bubble = styled.button`
width: 16px;
height: 16px;
margin-left: 16px;
border-radius: 50%;
border: 2px solid ${Colors.DarkGrey + "50"};
transition: .2s;
cursor: pointer;
&:first-child {
margin-left: 0px;
border: 2px solid ${props => props.isOtherTheme === "dark" ? Colors.White + "30" : Colors.DarkGrey + "50"}
}
&:hover {
transform: scale(1.1);
transition: .2s;
}
&:focus {
border-color: azure;
outline: none;
}
`;

const ThemeTabs = () => {
    const [themeChoice,setThemeChoice] = useContext(ToDoListContext);

    return <>

        <Wrapper>
            <Bubble isOtherTheme={themeChoice} style={{backgroundColor: Colors.DarkGrey}} onClick={() => setThemeChoice("dark")}/>
            <Bubble style={{backgroundColor: Colors.LightGrey}} onClick={() => setThemeChoice("light")}/>
            <Bubble style={{backgroundColor: Colors.Yellow}} onClick={() => setThemeChoice("yellow")}/>
        </Wrapper>

    </>

};

export default ThemeTabs;