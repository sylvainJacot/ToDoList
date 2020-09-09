import React from "react";
import styled from "styled-components";
import {Colors} from "../Colors";

export const Wrapper = styled.div`
display: flex;
margin-top: 90vh;
position: absolute;
`;
export const Bubble = styled.div`
width: 16px;
height: 16px;
background-color: darksalmon;
margin-left: 16px;
border-radius: 50%;
border: 2px solid ${Colors.DarkGrey + "50"};
transition: .2s;
&:first-child {
margin-left: 0px;
}
&:hover {
transform: scale(1.1);
transition: .2s;
}
`;

const ThemeTabs = () => {
    return <>
        <Wrapper>
            <Bubble></Bubble>
            <Bubble></Bubble>
            <Bubble></Bubble>
        </Wrapper>
    </>

};

export default ThemeTabs;