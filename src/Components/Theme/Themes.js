import React from "react";
import styled from "styled-components";
import {ThemeProvider} from "styled-components";
import theme from "syled"


const Themes = ({children}) => {
    return <>
        <ThemeProvider>
            {children}
        </ThemeProvider>
    </>

};

export default Themes;