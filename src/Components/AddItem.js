import React from "react";
import styled from "styled-components";

export const Form = styled.form`

`;

export const Input = styled.input`
border-radius: 5px;
padding: 8px;
width: 500px;
border: none;
transition: .3s;
font-size: 1rem;
font-weight: 600;
outline: none;

`;

const AddItem = () => {
    return <>
        <Form>
            <Input
            type={"text"}
            placeholder={"Add an item and press enter ⏎"}
            ></Input>
        </Form>
    </>

};

export default AddItem;