import React from "react";
import styled from "styled-components";
import {Colors} from "./Colors";

export const Button = styled.button`
display: flex;
align-items: center;
border-radius: 6px;
border: none;
padding: 2px 8px;
background-color: ${Colors.MediumGrey};
font-weight: 700;
color: ${Colors.White};
`;

const ResetBtn = (props) => {
    return <>
    <Button onClick={() => props.HandleResetBtn()}>
        Reset<span>&nbsp;🔄</span>
    </Button>
    </>

};

export default ResetBtn;