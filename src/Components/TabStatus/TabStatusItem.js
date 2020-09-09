import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Colors} from "../Colors";
import {TitleSecondaryColor} from "../Theme/Themes";


export const LinkWrapper = styled.li`
list-style: none;
`;

export const StyledLink = styled(Link)`
text-decoration: none;
color: ${TitleSecondaryColor};
transition: .2s;

&:hover {
transition: .2s;
opacity: .5;
}
&:active, :focus {
text-decoration: underline;
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