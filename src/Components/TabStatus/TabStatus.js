import React from "react";
import styled from "styled-components";
import TabStatusItem from "./TabStatusItem";
import {TabList} from "../Data";

export const Wrapper = styled.ul`
display: flex;
flex-direction: row;
`;

const TabStatus = () => {
    return <>
        <Wrapper>

            {
                TabList.map((TabListItem,index) =>

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