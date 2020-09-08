import React, {useState} from "react";
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
box-sizing: border-box;
`;

const AddItem = ({addToDo}) => {

    const [valueInput, setValueInput] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();
        addToDo(valueInput)
        setValueInput("");
    }
/* handleOnChange allows me to stock the input's value  */
    const handleOnChange = (e) =>
        setValueInput(e.target.value);
        console.log(valueInput)

    return <>
        <Form onSubmit={handleOnSubmit}>
            <Input
            type={"text"}
            placeholder={"Add an item and press enter ⏎"}
            value={valueInput}
            onChange={handleOnChange}
            ></Input>
        </Form>
    </>

};

export default AddItem;