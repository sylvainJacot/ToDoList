import React from "react";
import styled from "styled-components";
import TabStatusItem from "./TabStatusItem";
import {TabList} from "../Data";

export const Wrapper = styled.ul`
display: flex;
flex-direction: row;

& li {
margin-left: 40px;
}

& > :first-child {
margin-left: 0px;
}

`;

const TabStatus = () => {
    return <>
        <Wrapper>


            {TabList.map((TabListItem,index) =>

                <TabStatusItem
                    key={index}
                    to={TabListItem.path}
                    label={TabListItem.label}
                />

                )
            }


        </Wrapper>
    </>
}

export default TabStatus;