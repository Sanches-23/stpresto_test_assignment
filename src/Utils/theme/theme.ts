import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#556cd6",
            light: '#8897e0',
            dark: '#22429c',
            contrastText: '#fff',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: '#ff0000',
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        // fontFamily: 'Roboto',
    },
});