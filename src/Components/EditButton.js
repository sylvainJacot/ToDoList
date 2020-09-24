import React from "react";
import {Editicon} from "../Components/Media/Icons";
import styled from "styled-components";


const EditButton = () => {
    return <Wrapper>
        <Editicon/>
        Modify
    </Wrapper>

};

export default EditButton;

export const Wrapper = styled.div`
display: flex;

${Editicon} {
width: 16px;
}

`;