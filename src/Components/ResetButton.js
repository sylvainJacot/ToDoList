import React from "react";
import styled from "styled-components";
import {Colors} from "./Colors";
import {BackgroundColor, BackgroundColorNegative, TitleColor} from "./Theme/Themes"

export const Button = styled.button`
display: flex;
align-items: center;
border-radius: 6px;
border: none;
padding: 2px 8px;
background-color: ${BackgroundColorNegative};
font-weight: 700;
color: ${BackgroundColor};
cursor: pointer;
`;

const ResetBtn = (props) => {
    return <>
    <Button onClick={() => props.HandleResetBtn()}>
        Reset<span>&nbsp;🔄</span>
    </Button>
    </>

};

export default ResetBtn;