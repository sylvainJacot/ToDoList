import React, {useContext} from "react";
import {Colors} from "../Colors";
import  {ThemeProvider} from "styled-components";
import theme from "styled-theming";
import {ToDoListContext} from "../AppContext";

export const TitleColor = theme('mode', {
    light: Colors.DarkGrey,
    dark: Colors.White,
    yellow: Colors.Black
});

export const TitleSecondaryColor = theme('mode', {
    light: Colors.DarkGrey,
    dark: Colors.LightGrey,
    yellow: Colors.Black
});

export const BackgroundColor = theme('mode', {
    light: Colors.White,
    dark: Colors.DarkGrey,
    yellow: Colors.Yellow,
});
export const BackgroundColorNegative = theme('mode', {
    light: Colors.DarkGrey,
    dark: Colors.White,
    yellow: Colors.Black,
});

export const BackgroundSecondaryColor = theme('mode', {
    light: Colors.LightGrey,
    dark: Colors.White,
    yellow: Colors.White,
});


const Themes = ({children}) => {
    const [themeChoice,setThemeChoice] = useContext(ToDoListContext);
    return <>

        <ThemeProvider theme={{mode : themeChoice}}>
            {children}
        </ThemeProvider>

    </>

};

export default Themes;