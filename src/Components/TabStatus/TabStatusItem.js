import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Colors} from "../Colors";


export const LinkWrapper = styled.li`
list-style: none;
`;

export const StyledLink = styled(Link)`
text-decoration: none;
color: ${Colors.LightGrey};
transition: .2s;

&:hover {
color:${Colors.White};
transition: .2s;
}

`;


const TabStatusItem = (props) => {

    return <>
            <LinkWrapper key={props.key}>
                <StyledLink to={props.to}>
                    {props.label}
                </StyledLink>
            </LinkWrapper>
    </>

};

export default TabStatusItem;