import React from "react";
import styled from "styled-components";
import {TitleSecondaryColor} from "../Theme/Themes";
import {EditIcon} from "../Media/Icons";

export const Wrapper = styled.button`
display: flex;
align-items: center;
background: none;
border: none;
padding: 0;
margin-bottom: 16px;
color: ${TitleSecondaryColor};
opacity: .2;
transition: .2s;
cursor: pointer;
& > svg {
width: 16px;
height: 16px;
fill: ${TitleSecondaryColor};
margin-right: 4px;
transition: .2s;
}

&:hover {
opacity: .8;
transition: .2s;
}

`;

const EditButton = ({onClick}) => {

    return (
        <>
    <Wrapper onClick={onClick}>
        <EditIcon/>
        Edit
    </Wrapper>
            </>
    )

};

export default EditButton;